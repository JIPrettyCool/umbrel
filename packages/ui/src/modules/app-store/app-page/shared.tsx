import {useState} from 'react'

import {Markdown} from '@/components/markdown'
import {cardFaintClass} from '@/modules/app-store/shared'
import {cn} from '@/shadcn-lib/utils'
import {tw} from '@/utils/tw'

export function ReadMoreMarkdownSection({children, collapseClassName}: {children: string; collapseClassName: string}) {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggle = () => setIsExpanded((prev) => !prev)

	return (
		<>
			<Markdown className={cn(cardTextClass, !isExpanded && collapseClassName)}>{children}</Markdown>
			<button
				onClick={toggle}
				className='self-start text-13 font-medium text-brand-lighter transition-colors hover:text-brand group-hover:text-brand'
			>
				{isExpanded ? 'Read less' : 'Read more'}
			</button>
		</>
	)
}

export const appPageWrapperClass = tw`flex flex-col gap-5 md:gap-[40px]`
export const cardClass = cn(cardFaintClass, tw`rounded-12 px-[20px] py-[30px] flex flex-col gap-5`)
export const cardTitleClass = tw`text-12 opacity-50 uppercase leading-tight font-semibold tracking-normal`
export const cardTextClass = tw`text-15 leading-snug`
