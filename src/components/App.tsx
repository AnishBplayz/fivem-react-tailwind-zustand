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
				<motion.div
					className='flex items-center justify-center w-screen h-screen bg-black/20'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.div
						className='relative w-2/3 h-3/5 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-700/80 overflow-hidden'
						initial={{ scale: 0.8, y: 50 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.8, y: 50 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						{/* Laptop Screen Bezel */}
						<div className='absolute inset-3 bg-black rounded border border-gray-600/50'>
							{/* Screen Content */}
							<div className='flex flex-col items-center justify-center h-full px-12 py-8 space-y-8'>
								{/* Header Section */}
								<motion.div
									className='text-center space-y-2'
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.2, duration: 0.6 }}
								>
									<h1 className='text-4xl font-bold text-white'>FiveM UI</h1>
									<p className='text-gray-400 text-lg'>Start Building Your App</p>
								</motion.div>

								{/* Interactive Button */}
								<motion.button
									onClick={handleButtonClick}
									className='px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg border border-blue-400/50 transition-all duration-300 transform'
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
						<div className='absolute inset-3 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded pointer-events-none'></div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default App;
