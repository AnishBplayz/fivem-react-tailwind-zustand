// import { useEffect, useState } from "react";
import { useNuiEvent } from '@/hooks/useNuiEvent';
// import { fetchNui } from "@/utils/fetchNui";
import { useVisibility } from '@/store/visibility';
import { debugData } from '@/utils/debugData';
import { AnimatePresence, motion } from 'motion/react';
import { useShallow } from 'zustand/react/shallow';

debugData([
	{
		action: 'ToggleUI',
		data: true,
	},
]);

const App = () => {
	const [visible, setVisible] = useVisibility(useShallow((state) => [state.visible, state.setVisible]));

	useNuiEvent('ToggleUI', (data) => {
		setVisible(data);
	});

	const handleButtonClick = () => {
		console.log('Button pressed!');
		// Add your button logic here
	};

	return (
		<AnimatePresence mode='sync'>
			{visible && (
				<motion.div className='flex h-screen w-screen items-center justify-center bg-black/20' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
					<motion.div
						className='relative h-3/5 w-2/3 overflow-hidden rounded-lg border-2 border-gray-700/80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl'
						initial={{ scale: 0.8, y: 50 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.8, y: 50 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						{/* Laptop Screen Bezel */}
						<div className='absolute inset-3 rounded border border-gray-600/50 bg-black'>
							{/* Screen Content */}
							<div className='flex h-full flex-col items-center justify-center space-y-8 px-12 py-8'>
								{/* Header Section */}
								<motion.div className='space-y-2 text-center' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
									<h1 className='text-4xl font-bold text-white'>FiveM UI</h1>
									<p className='text-lg text-gray-400'>Start Building Your App</p>
								</motion.div>

								{/* Interactive Button */}
								<motion.button
									onClick={handleButtonClick}
									className='transform rounded-xl border border-blue-400/50 bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-400'
									whileHover={{
										scale: 1.05,
										boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
									}}
									whileTap={{ scale: 0.95 }}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.6 }}
									tabIndex={0}
									aria-label='Press me button'
								>
									Press me
								</motion.button>
							</div>
						</div>

						{/* Laptop Screen Reflection Effect */}
						<div className='pointer-events-none absolute inset-3 rounded bg-gradient-to-r from-transparent via-white/5 to-transparent'></div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default App;
