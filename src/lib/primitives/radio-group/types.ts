import type {
	Expand,
	HTMLDivAttributes,
	KeydownClickEvents,
	OmitValue,
	OnChangeFn
} from "$internal/index.js";
import type {
	CreateRadioGroupProps,
	RadioGroupComponentEvents,
	RadioGroupItemProps
} from "@melt-ui/svelte";
import type { HTMLInputAttributes } from "svelte/elements";

type Props = Expand<
	OmitValue<CreateRadioGroupProps> & {
		value?: CreateRadioGroupProps["defaultValue"];
		onValueChange?: OnChangeFn<CreateRadioGroupProps["defaultValue"]>;
	}
> &
	HTMLDivAttributes;

type InputProps = HTMLInputAttributes;

type ItemProps = Expand<
	RadioGroupItemProps & {
		asChild?: boolean;
	}
> &
	HTMLButtonElement;

type ItemEvents = RadioGroupComponentEvents["item"] & KeydownClickEvents;

export type {
	Props,
	InputProps,
	ItemProps,
	//
	Props as RadioGroupProps,
	InputProps as RadioGroupInputProps,
	ItemProps as RadioGroupItemProps,
	//
	ItemEvents,
	//
	ItemEvents as RadioGroupItemEvents
};
