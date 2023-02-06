import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Login =  dynamic(() => import('@/components/organismos/Login'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Login />
        </Suspense>
    )
    
}