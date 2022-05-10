// assets
import {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconRadio,
    IconPlayerSkipForward,
    IconBorderAll,
    IconForms
} from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconForms,
    IconRadio,
    IconPlayerSkipForward,
    IconBorderAll
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-button',
            title: 'Buttons',
            type: 'item',
            url: '/utils/util-button',
            icon: icons.IconPlayerSkipForward,
            breadcrumbs: false
        },
        {
            id: 'util-form',
            title: 'Forms',
            type: 'item',
            url: '/utils/util-form',
            icon: icons.IconForms,
            breadcrumbs: false
        },
        {
            id: 'util-table',
            title: 'Tables',
            type: 'item',
            url: '/utils/util-table',
            icon: icons.IconBorderAll,
            breadcrumbs: false
        },
        {
            id: 'util-radio',
            title: 'Radio',
            type: 'item',
            url: '/utils/util-radio',
            icon: icons.IconRadio,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
