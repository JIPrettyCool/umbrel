import {ReactNode} from 'react'

import {UNKNOWN} from '@/constants'
import {RegistryApp} from '@/trpc/trpc'
import {linkClass} from '@/utils/element-classes'
import {t} from '@/utils/i18n'

import {cardClass, cardTitleClass} from './shared'

export const InfoSection = ({app}: {app: RegistryApp}) => (
	<div className={cardClass}>
		<h2 className={cardTitleClass}>{t('app-page.section.info.title')}</h2>
		<KV k={t('app-page.section.info.version')} v={app.version} />
		{app.repo && (
			<KV
				k={t('app-page.section.info.source-code')}
				v={
					<a href={app.repo} target='_blank' className={linkClass}>
						{t('app-page.section.info.source-code.public')}
					</a>
				}
			/>
		)}
		<KV
			k={t('app-page.section.info.developer')}
			v={
				<a href={app.website} target='_blank' className={linkClass}>
					{app.developer}
				</a>
			}
		/>
		{app.submission && app.submitter && (
			<KV
				k={t('app-page.section.info.submitted-by')}
				v={
					<a href={app.submission} target='_blank' className={linkClass}>
						{app.submitter}
					</a>
				}
			/>
		)}
		<KV k={t('app-page.section.info.compatibility')} v={t('app-page.section.info.compatibility-compatible')} />
	</div>
)

function KV({k, v}: {k: ReactNode; v: ReactNode}) {
	return (
		<div className='flex flex-row items-center gap-2'>
			<span className='flex-1 text-14 opacity-50'>{k}</span>
			<span className='text-right text-14 font-medium'>{v || UNKNOWN()}</span>
		</div>
	)
}
