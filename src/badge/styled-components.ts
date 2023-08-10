/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import type { Placement, Color, Shape, Role, Hierarchy } from './types';
import { COLOR, SHAPE, ROLE, PLACEMENT, HIERARCHY } from './constants';

// @ts-ignore
function getColorStyles({ $theme, $hierarchy, $color }): {
  color: string;
  backgroundColor: string;
} {
  const COLOR_STYLES = {
    [HIERARCHY.primary]: {
      [COLOR.accent]: {
        color: $theme.colors.contentOnColor,
        backgroundColor: $theme.colors.backgroundAccent,
      },
      [COLOR.primary]: {
        color: $theme.colors.contentInversePrimary,
        backgroundColor: $theme.colors.backgroundInversePrimary,
      },
      [COLOR.positive]: {
        color: $theme.colors.contentOnColor,
        backgroundColor: $theme.colors.backgroundPositive,
      },
      [COLOR.negative]: {
        color: $theme.colors.contentOnColor,
        backgroundColor: $theme.colors.backgroundNegative,
      },
      [COLOR.warning]: {
        color: $theme.colors.contentOnColorInverse,
        backgroundColor: $theme.colors.backgroundWarning,
      },
    },
    [HIERARCHY.secondary]: {
      [COLOR.accent]: {
        color: $theme.colors.contentAccent,
        backgroundColor: $theme.colors.backgroundAccentLight,
      },
      [COLOR.primary]: {
        color: $theme.colors.contentPrimary,
        backgroundColor: $theme.colors.backgroundSecondary,
      },
      [COLOR.positive]: {
        color: $theme.colors.contentPositive,
        backgroundColor: $theme.colors.backgroundPositiveLight,
      },
      [COLOR.negative]: {
        color: $theme.colors.contentNegative,
        backgroundColor: $theme.colors.backgroundNegativeLight,
      },
      [COLOR.warning]: {
        color: $theme.colors.contentWarning,
        backgroundColor: $theme.colors.backgroundWarningLight,
      },
    },
  };

  // @ts-ignore
  return COLOR_STYLES[$hierarchy][$color];
}

const DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT = {
  top: '-10px',
  right: '-10px',
};

const DEFAULT_HINT_DOT_PLACEMENT = {
  top: '-4px',
  right: '-4px',
};

const POSITION_STYLES = Object.freeze({
  [ROLE.badge]: {
    [PLACEMENT.topEdge]: {
      top: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [PLACEMENT.bottomEdge]: {
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [PLACEMENT.topLeft]: {
      top: '16px',
      left: '16px',
    },
    [PLACEMENT.topRight]: {
      top: '16px',
      right: '16px',
    },
    [PLACEMENT.bottomRight]: {
      bottom: '16px',
      right: '16px',
    },

    [PLACEMENT.bottomLeft]: {
      bottom: '16px',
      left: '16px',
    },
    [PLACEMENT.topLeftEdge]: {
      top: '-8px',
      left: '16px',
    },
    [PLACEMENT.topRightEdge]: {
      top: '-8px',
      right: '16px',
    },
    [PLACEMENT.bottomRightEdge]: {
      bottom: '-8px',
      right: '16px',
    },
    [PLACEMENT.bottomLeftEdge]: {
      bottom: '-8px',
      left: '16px',
    },
    [PLACEMENT.leftTopEdge]: {
      top: '16px',
      left: '-8px',
    },
    [PLACEMENT.rightTopEdge]: {
      top: '16px',
      right: '-8px',
    },
    [PLACEMENT.rightBottomEdge]: {
      bottom: '16px',
      right: '-8px',
    },
    [PLACEMENT.leftBottomEdge]: {
      bottom: '16px',
      left: '-8px',
    },
  },
  [ROLE.notificationCircle]: {
    [PLACEMENT.topLeft]: {
      top: '-10px',
      left: '-10px',
    },
    [PLACEMENT.topRight]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    // NotificationCircle can only be placed topLeft or topRight, other values fall back to topRight
    [PLACEMENT.topEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.bottomEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.bottomRight]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.bottomLeft]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.topLeftEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.topRightEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.bottomRightEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.bottomLeftEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.leftTopEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.rightTopEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.rightBottomEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
    [PLACEMENT.leftBottomEdge]: DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT,
  },
  [ROLE.hintDot]: {
    [PLACEMENT.topLeft]: {
      top: '-4px',
      left: '-4px',
    },
    [PLACEMENT.topRight]: DEFAULT_HINT_DOT_PLACEMENT,
    // HintDot can only be placed topLeft or topRight, other values fall back to topRight
    [PLACEMENT.topEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.bottomEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.bottomRight]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.bottomLeft]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.topLeftEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.topRightEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.bottomRightEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.bottomLeftEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.leftTopEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.rightTopEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.rightBottomEdge]: DEFAULT_HINT_DOT_PLACEMENT,
    [PLACEMENT.leftBottomEdge]: DEFAULT_HINT_DOT_PLACEMENT,
  },
});

export const StyledRoot = styled<'div', {}>('div', () => {
  return {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 'initial',
  };
});

StyledRoot.displayName = 'StyledRoot';

const TOP_PLACEMENTS: Placement[] = [
  PLACEMENT.topLeft,
  PLACEMENT.topRight,
  PLACEMENT.topLeftEdge,
  PLACEMENT.topEdge,
  PLACEMENT.topRightEdge,
  PLACEMENT.leftTopEdge,
  PLACEMENT.rightTopEdge,
];
const BOTTOM_PLACEMENTS: Placement[] = [
  PLACEMENT.bottomLeft,
  PLACEMENT.bottomRight,
  PLACEMENT.bottomLeftEdge,
  PLACEMENT.bottomEdge,
  PLACEMENT.bottomRightEdge,
  PLACEMENT.leftBottomEdge,
  PLACEMENT.rightBottomEdge,
];
const LEFT_PLACEMENTS: Placement[] = [
  PLACEMENT.topLeft,
  PLACEMENT.topLeftEdge,
  PLACEMENT.topEdge,
  PLACEMENT.bottomLeft,
  PLACEMENT.bottomLeftEdge,
  PLACEMENT.bottomEdge,
  PLACEMENT.leftTopEdge,
  PLACEMENT.leftBottomEdge,
];
const RIGHT_PLACEMENTS: Placement[] = [
  PLACEMENT.topRight,
  PLACEMENT.topRightEdge,
  PLACEMENT.bottomRight,
  PLACEMENT.bottomRightEdge,
  PLACEMENT.rightTopEdge,
  PLACEMENT.rightBottomEdge,
];

export const StyledPositioner = styled<
  'div',
  {
    $role: Role;
    $placement: Placement;
    $horizontalOffset?: string | null;
    $verticalOffset?: string | null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>('div', ({ $theme, $role, $placement, $horizontalOffset, $verticalOffset }) => {
  let positionStyle = POSITION_STYLES[$role][$placement];

  if ($verticalOffset) {
    if (TOP_PLACEMENTS.includes($placement)) {
      positionStyle = { ...positionStyle, top: $verticalOffset };
    }
    if (BOTTOM_PLACEMENTS.includes($placement)) {
      positionStyle = { ...positionStyle, bottom: $verticalOffset };
    }
  }

  if ($horizontalOffset) {
    if (LEFT_PLACEMENTS.includes($placement)) {
      positionStyle = { ...positionStyle, left: $horizontalOffset };
    }
    if (RIGHT_PLACEMENTS.includes($placement)) {
      positionStyle = { ...positionStyle, right: $horizontalOffset };
    }
  }

  return {
    ...positionStyle,
    position: 'absolute',
    lineHeight: 'initial',
  };
});

StyledPositioner.displayName = 'StyledPositioner';

export const StyledBadge = styled<
  'div',
  {
    $shape?: Shape;
    $color?: Color;
    $hierarchy?: Hierarchy;
    $hidden?: boolean;
  }
>(
  'div',
  ({
    $theme,
    $shape = SHAPE.rectangle,
    $color = COLOR.accent,
    $hierarchy = HIERARCHY.primary,
    $hidden,
  }) => {
    return {
      visibility: $hidden ? 'hidden' : 'inherit',
      boxSizing: 'border-box',
      height: $theme.sizing.scale700,
      borderRadius:
        $shape === SHAPE.rectangle ? $theme.borders.radius200 : $theme.borders.radius500,
      paddingRight: $shape === SHAPE.rectangle ? $theme.sizing.scale100 : $theme.sizing.scale300,
      paddingLeft: $shape === SHAPE.rectangle ? $theme.sizing.scale100 : $theme.sizing.scale300,
      display: 'inline-flex',
      alignItems: 'center',
      ...getColorStyles({ $theme, $hierarchy, $color }),
      ...($hierarchy === HIERARCHY.primary
        ? $theme.typography.LabelSmall
        : $theme.typography.ParagraphSmall),
    };
  }
);

StyledBadge.displayName = 'StyledBadge';

export const StyledNotificationCircle = styled<
  'div',
  {
    $color?: Color;
    $hidden?: boolean;
  }
>('div', ({ $theme, $color = COLOR.accent, $hidden }) => {
  return {
    visibility: $hidden ? 'hidden' : 'inherit',
    height: $theme.sizing.scale700,
    width: $theme.sizing.scale700,
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...getColorStyles({ $theme, $hierarchy: HIERARCHY.primary, $color }),
    ...$theme.typography.LabelXSmall,
  };
});

StyledNotificationCircle.displayName = 'StyledNotificationCircle';

export const StyledHintDot = styled<
  'div',
  {
    $color: Color;
    $hidden?: boolean;
  }
>('div', ({ $theme, $color = COLOR.accent, $hidden }) => {
  return {
    visibility: $hidden ? 'hidden' : 'inherit',
    // @ts-ignore
    backgroundColor: $theme.colors[$color],
    boxSizing: 'content-box',
    height: '8px',
    width: '8px',
    borderRadius: '50%',
    border: `4px solid ${$theme.colors.backgroundPrimary}`,
    ...getColorStyles({ $theme, $hierarchy: HIERARCHY.primary, $color }),
  };
});
StyledHintDot.displayName = 'StyledHintDot';
