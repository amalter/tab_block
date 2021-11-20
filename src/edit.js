/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const ALLOWED_BLOCKS = [ 'create-block/tab' ];

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import './tab.js';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

 export default function Edit( props ) {

	const { 
		attributes,
		setAttributes,

	} = props;
	const { tabLabelsArray, updateChild, sideTabLayout } = attributes;

	const buildTabLabelsArray = () =>{
		//function gets child block attributes and saves as an array to parent attributes
		const parentBlockID = props.clientId;
		const { innerBlockCount } = useSelect(select => ({
			innerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)
		}));

		var tabLabels = [];
		
		for (let block = 0; block < innerBlockCount; block++) {
			let tabLabel = wp.data.select( 'core/block-editor' ).getBlocks( parentBlockID )[block].attributes.tabLabel;
			tabLabels.push(tabLabel);
		}
	
		return tabLabels;
	}

	var labelsArray = buildTabLabelsArray();
	var labelLengthChange = labelsArray.length !== tabLabelsArray.length;
	
	if( labelLengthChange || updateChild ){
		setAttributes ({ tabLabelsArray: labelsArray  });
		setAttributes ({ updateChild: false });
	}

	const onChangeTabLabel = toggle => {
		setAttributes({ sideTabLayout: toggle });
	};
	
	return (
		<div { ...useBlockProps() }>
			<h2>Tabbed Layout Block</h2>
			<ToggleControl
				label="Switch to side tab layout"
				help={
					sideTabLayout
						? 'Side tab layout selected'
						: 'Defoult layout'
				}
				checked={ sideTabLayout }
				onChange={ onChangeTabLabel }
			/>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>				
		</div>
	);
}