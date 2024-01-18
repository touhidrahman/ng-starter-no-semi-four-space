import { BrnAccordionImports } from '@spartan-ng/ui-accordion-brain'
import { HlmAccordionImports } from '@spartan-ng/ui-accordion-helm'
import { HlmAlertImports } from '@spartan-ng/ui-alert-helm'
import { BrnAlertDialogImports } from '@spartan-ng/ui-alertdialog-brain'
import { HlmAlertDialogImports } from '@spartan-ng/ui-alertdialog-helm'
import { HlmAspectRatioModule } from '@spartan-ng/ui-aspectratio-helm'
import { HlmAvatarImports } from '@spartan-ng/ui-avatar-helm'
import { HlmBadgeModule } from '@spartan-ng/ui-badge-helm'
import { HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { HlmCardImports } from '@spartan-ng/ui-card-helm'
import { BrnCheckboxImports } from '@spartan-ng/ui-checkbox-brain'
import { HlmCheckboxImports } from '@spartan-ng/ui-checkbox-helm'
import {
    BrnCollapsibleComponent,
    BrnCollapsibleContentComponent,
    BrnCollapsibleImports,
    BrnCollapsibleTriggerDirective,
} from '@spartan-ng/ui-collapsible-brain'
import { BrnCommandImports } from '@spartan-ng/ui-command-brain'
import { HlmCommandImports } from '@spartan-ng/ui-command-helm'
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain'
import { HlmDialogImports } from '@spartan-ng/ui-dialog-helm'
import { BrnHoverCardModule } from '@spartan-ng/ui-hovercard-brain'
import { HlmHoverCardImports } from '@spartan-ng/ui-hovercard-helm'
import { HlmIconModule } from '@spartan-ng/ui-icon-helm'
import { HlmInputModule } from '@spartan-ng/ui-input-helm'
import { HlmLabelModule } from '@spartan-ng/ui-label-helm'
import {
    BrnContextMenuTriggerDirective,
    BrnMenuBarImports,
    BrnMenuImports,
    BrnMenuTriggerDirective,
} from '@spartan-ng/ui-menu-brain'
import { HlmMenuBarImports, HlmMenuImports } from '@spartan-ng/ui-menu-helm'
import {
    BrnPopoverCloseDirective,
    BrnPopoverComponent,
    BrnPopoverContentDirective,
    BrnPopoverImports,
    BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain'
import { HlmPopoverImports } from '@spartan-ng/ui-popover-helm'
import {
    BrnProgressComponent,
    BrnProgressImports,
    BrnProgressIndicatorComponent,
} from '@spartan-ng/ui-progress-brain'
import { HlmProgressImports } from '@spartan-ng/ui-progress-helm'
import {
    BrnRadioComponent,
    BrnRadioGroupComponent,
    BrnRadioGroupImports,
} from '@spartan-ng/ui-radiogroup-brain'
import { HlmRadioGroupImports } from '@spartan-ng/ui-radiogroup-helm'
import { HlmScrollAreaModule } from '@spartan-ng/ui-scrollarea-helm'
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain'
import { HlmSeparatorModule } from '@spartan-ng/ui-separator-helm'
import { BrnSheetImports } from '@spartan-ng/ui-sheet-brain'
import { HlmSheetImports } from '@spartan-ng/ui-sheet-helm'
import { HlmSkeletonModule } from '@spartan-ng/ui-skeleton-helm'
import { HlmSpinnerModule } from '@spartan-ng/ui-spinner-helm'
import {
    BrnSwitchComponent,
    BrnSwitchImports,
    BrnSwitchThumbComponent,
} from '@spartan-ng/ui-switch-brain'
import { HlmSwitchImports } from '@spartan-ng/ui-switch-helm'
import { BrnTableImports, BrnTableModule } from '@spartan-ng/ui-table-brain'
import { HlmTableImports } from '@spartan-ng/ui-table-helm'
import { BrnTabsDirective } from '@spartan-ng/ui-tabs-brain'
import { HlmTabsImports } from '@spartan-ng/ui-tabs-helm'
import { BrnToggleModule } from '@spartan-ng/ui-toggle-brain'
import { HlmToggleGroupModule, HlmToggleModule } from '@spartan-ng/ui-toggle-helm'
import { BrnTooltipImports } from '@spartan-ng/ui-tooltip-brain'
import { HlmTooltipImports } from '@spartan-ng/ui-tooltip-helm'
import {
    HlmBlockquoteDirective,
    HlmCodeDirective,
    HlmH1Directive,
    HlmLargeDirective,
    HlmLeadDirective,
    HlmMutedDirective,
    HlmPDirective,
    HlmSmallDirective,
    HlmUlDirective,
} from '@spartan-ng/ui-typography-helm'

export const BrainImports = [
    ...BrnAccordionImports,
    ...BrnAlertDialogImports,
    ...BrnCheckboxImports,
    ...BrnCheckboxImports,
    ...BrnCollapsibleImports,
    ...BrnCommandImports,
    ...BrnSheetImports,
    ...BrnTableImports,
    ...BrnTooltipImports,
    ...BrnRadioGroupImports,
    ...BrnSwitchImports,
    ...BrnPopoverImports,
    ...BrnProgressImports,
    ...BrnCollapsibleImports,
    ...BrnMenuBarImports,
    ...BrnMenuImports,
    BrnCollapsibleComponent,
    BrnCollapsibleContentComponent,
    BrnCollapsibleTriggerDirective,
    BrnContextMenuTriggerDirective,
    BrnDialogContentDirective,
    BrnDialogTriggerDirective,
    BrnHoverCardModule,
    BrnMenuTriggerDirective,
    BrnPopoverCloseDirective,
    BrnPopoverComponent,
    BrnPopoverContentDirective,
    BrnPopoverTriggerDirective,
    BrnProgressComponent,
    BrnProgressIndicatorComponent,
    BrnRadioComponent,
    BrnRadioGroupComponent,
    BrnSeparatorComponent,
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    BrnTableModule,
    BrnTabsDirective,
    BrnToggleModule,
]

export const HelmImports = [
    ...HlmAccordionImports,
    ...HlmAlertDialogImports,
    ...HlmAlertImports,
    ...HlmAvatarImports,
    ...HlmCardImports,
    ...HlmCheckboxImports,
    ...HlmCommandImports,
    ...HlmDialogImports,
    ...HlmHoverCardImports,
    ...HlmMenuBarImports,
    ...HlmMenuImports,
    ...HlmPopoverImports,
    ...HlmProgressImports,
    ...HlmRadioGroupImports,
    ...HlmSheetImports,
    ...HlmSwitchImports,
    ...HlmTooltipImports,
    ...HlmTabsImports,
    ...HlmTableImports,
]

export const SpartanModules = [
    HlmAspectRatioModule,
    HlmBadgeModule,
    HlmBadgeModule,
    HlmButtonModule,
    HlmIconModule,
    HlmInputModule,
    HlmLabelModule,
    HlmScrollAreaModule,
    HlmScrollAreaModule,
    HlmSeparatorModule,
    HlmSkeletonModule,
    HlmSpinnerModule,
    HlmToggleGroupModule,
    HlmToggleModule,
]

export const SpartanTypographyDirectives = [
    HlmBlockquoteDirective,
    HlmCodeDirective,
    HlmH1Directive,
    HlmLargeDirective,
    HlmLeadDirective,
    HlmMutedDirective,
    HlmPDirective,
    HlmSmallDirective,
    HlmUlDirective,
]

export const SpartanImports = [
    ...HelmImports,
    ...SpartanModules,
    ...BrainImports,
    ...SpartanTypographyDirectives,
]
