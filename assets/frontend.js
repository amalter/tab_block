window.onload = function() {
    var tabBlocks = document.querySelectorAll( '.wp-block-create-block-tabs' );

    tabBlocks.forEach( function( tabBlock, i ){
        
        var tabLabels = tabBlock.querySelectorAll( '.tab-label' );
        var tabPanels = tabBlock.querySelectorAll( '.tab-panel' );

        var setIDs = function (tabItems, i){
            //dyanamically adds ids to tab and tabpanel elements
            tabItems.forEach(function (element, index){
              const role =  element.getAttribute('role');
              tabItems[index].id = `${role}-${i}-${index}`;
            });
        }
        setIDs(tabLabels, i);
        setIDs(tabPanels, i);

        var setAriaAttributes = function (tabItems, i){
            //checks role and adds aria-controls and aria-labledby attributes if role is set to tab or tabpanel
            tabItems.forEach(function (element, index){
              const role =  element.getAttribute('role');
              if (role === 'tab') {
                  tabItems[index].setAttribute('aria-controls', `tabpanel-${i}-${index}`);
              }else if (role === 'tabpanel') {
                tabItems[index].setAttribute('aria-labelledby', `tab-${i}-${index}`);
              }
              tabItems[index].id = `${role}-${i}-${index}`;
            });
        }
        setAriaAttributes(tabLabels, i);
        setAriaAttributes(tabPanels, i);

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

        var toggleAttributes = function (label, i){
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
                tabPanels[i].removeAttribute('hidden');
        }

        tabLabels.forEach( function (label, i) {
            if (label.classList.contains('active')){
                tabPanels[i].classList.toggle('active');
            }
                    
            label.addEventListener('click', function (e){
                if(toggleEvent(e)=== true){
                    toggleAttributes(label, i);
                }
            });
            label.addEventListener('keypress', function (e){
                if(toggleEvent(e)=== true){
                    toggleAttributes(label, i);
                }
            });
        });
    });//tabBlocks forEach
};
