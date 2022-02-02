window.onload = function() {
    var tabBlocks = document.querySelectorAll( '.wp-block-create-block-tabs' );

    tabBlocks.forEach( function( tabBlock, i ){
        
        var tabLabels = tabBlock.querySelectorAll( '.tab-label' );
        var tabPanels = tabBlock.querySelectorAll( '.tab-panel' );

        //check for mouse click or enter keypress
        var toggleEvent = function (e){
            if (e.type === 'click') {
                return true;
            } 
            else if(e.type === 'keypress') {
                var code = e.charCode || e.keyCode;
                if ((code === 32) || (code === 13)) {
                    return true;
                }
            } 
            else {
                return false;
            }
        }//a11yEvent

        var toggleTabClasses = function (label, i){
                var activeTab = tabBlock.querySelector('.tab-label.active');
                var activePanel = tabBlock.querySelector('.tab-panel.active');
                
                activeTab.classList.remove('active');
                activeTab.setAttribute('tabindex', 0);
                activeTab.setAttribute('aria-selected', false);

                label.classList.add('active');
                label.setAttribute('tabindex', -1);
                label.setAttribute('aria-selected', true);

                activePanel.classList.remove('active');
                activePanel.setAttribute('tabindex', 0);
                activePanel.setAttribute('aria-selected', false);
                activePanel.setAttribute('hidden', true);

                tabPanels[i].classList.add('active');    
                tabPanels[i].setAttribute('tabindex', -1);
                tabPanels[i].setAttribute('aria-selected', true);
                tabPanels[i].removeAttribute('hidden');
        }

        tabLabels.forEach( function (label, i) {
            if (label.classList.contains('active')){
                tabPanels[i].classList.toggle('active');
            }
                    
            label.addEventListener('click', function (e){
                if(toggleEvent(e)=== true){
                    toggleTabClasses(label, i);
                }
            });
            label.addEventListener('keypress', function (e){
                if(toggleEvent(e)=== true){
                    toggleTabClasses(label, i);
                }
            });
        });
    });//tabBlocks forEach
};
