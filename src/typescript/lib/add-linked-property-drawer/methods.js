/**
 * mutate the component instance when the drawer closes
 */
const closeSideDrawer = (instance) => {
    instance.visible = false;
    instance.recordTo = {};
    instance.radioSelection = '';
    instance.initialSelection = '';
    instance.linkedProperty = {};
};
/**
 * all methods as a single object to be used in the actual component
 */
export const Methods = {
    closeSideDrawer
};
//# sourceMappingURL=methods.js.map