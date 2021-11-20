/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const {
		attributes: { tabLabelsArray, sideTabLayout }
	} = props;

	var blockProps = useBlockProps.save();
	if (sideTabLayout){
		blockProps = useBlockProps.save({
			className: 'side-tab-layout'
		});
	}
	
	return (
		<div { ...blockProps } >
			<ul className="tab-labels" role="tablist" aria-label="tabbed content">
				{tabLabelsArray.map((label, i) => {
					return ( <li className={i == 0 ? "tab-label active" : "tab-label"} role="tab" aria-selected={i == 0 ? "true" : "false"} aria-controls={label} tabindex="0"><RawHTML>{label}</RawHTML></li>);	
				})}
			</ul>
			<div className="tab-content">
				<InnerBlocks.Content />
			</div>		
		</div>
	);
}
