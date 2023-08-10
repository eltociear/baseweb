/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type {
  FoundationColorTokens,
  CoreSemanticColorTokens,
  CoreExtensionSemanticColorTokens,
  DeprecatedSemanticColorTokens,
  SemanticColorTokens,
} from '../types';
import defaultFoundationColorTokens from './color-tokens';
import { hexToRgb as hexToRgba } from '../../styles/util';
import colors from '../../tokens/colors';

export default (
  // themePrimitives or foundation colors
  foundation: FoundationColorTokens = defaultFoundationColorTokens
): SemanticColorTokens => {
  const core: CoreSemanticColorTokens = {
    // Background
    backgroundPrimary: foundation.primaryB,
    backgroundSecondary: colors.gray50,
    backgroundTertiary: colors.gray100,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: colors.gray800,

    // Content
    contentPrimary: foundation.primaryA,
    contentSecondary: colors.gray600,
    contentTertiary: colors.gray500,
    contentInversePrimary: foundation.primaryB,
    contentInverseSecondary: colors.gray300,
    contentInverseTertiary: colors.gray400,

    // Border
    borderOpaque: colors.gray200,
    // @ts-ignore
    borderTransparent: hexToRgba(foundation.primaryA, '0.08'),
    borderSelected: foundation.primaryA,
    borderInverseOpaque: colors.gray700,
    // @ts-ignore
    borderInverseTransparent: hexToRgba(foundation.primaryB, '0.2'),
    borderInverseSelected: foundation.primaryB,
  };

  const coreExtensions: CoreExtensionSemanticColorTokens = {
    // Backgrounds
    backgroundStateDisabled: colors.gray50,
    // @ts-ignore
    backgroundOverlay: hexToRgba(colors.black, '0.5'),
    // @ts-ignore
    backgroundOverlayArt: hexToRgba(colors.black, '0.00'),
    backgroundAccent: foundation.accent,
    backgroundNegative: foundation.negative,
    backgroundWarning: foundation.warning,
    backgroundPositive: colors.green400,
    backgroundAccentLight: colors.blue50,
    backgroundNegativeLight: colors.red50,
    backgroundWarningLight: colors.yellow50,
    backgroundPositiveLight: colors.green50,
    backgroundAlwaysDark: colors.black,
    backgroundAlwaysLight: colors.white,

    // Content
    contentStateDisabled: colors.gray400,
    contentAccent: foundation.accent,
    contentOnColor: colors.white,
    contentOnColorInverse: colors.black,
    contentNegative: foundation.negative,
    contentWarning: colors.yellow600,
    contentPositive: colors.green400,

    // Border
    borderStateDisabled: colors.gray50,
    borderAccent: colors.blue400,
    borderAccentLight: colors.blue200,
    borderNegative: colors.red200,
    borderWarning: colors.yellow200,
    borderPositive: colors.green200,
    borderNegativeLight: colors.red200,
    borderWarningLight: colors.yellow200,
    borderPositiveLight: colors.green200,

    // Programs
    safety: colors.blue400,
    eatsGreen400: colors.green400,
    freightBlue400: colors.cobalt400,
    jumpRed400: colors.red400,
    rewardsTier1: colors.blue400,
    rewardsTier2: colors.yellow400,
    rewardsTier3: colors.platinum400,
    rewardsTier4: colors.black,
    membership: colors.yellow600,
  };
  const deprecated: DeprecatedSemanticColorTokens = {
    backgroundOverlayLight: coreExtensions.backgroundOverlay,
    backgroundOverlayDark: coreExtensions.backgroundOverlay,
    backgroundLightAccent: coreExtensions.backgroundAccentLight,
    backgroundLightPositive: coreExtensions.backgroundPositiveLight,
    backgroundLightWarning: coreExtensions.backgroundWarningLight,
    backgroundLightNegative: coreExtensions.backgroundNegativeLight,
  };
  return {
    ...core,
    ...coreExtensions,
    ...deprecated,
  };
};
