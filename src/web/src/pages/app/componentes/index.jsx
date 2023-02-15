import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Componentes =  dynamic(() => import('@/components/organismos/App/Componentes'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Componentes/>
        </Suspense>
    )
}

Page.nav = true