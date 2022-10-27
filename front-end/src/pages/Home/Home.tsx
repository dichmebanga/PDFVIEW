import React, { useState } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import "./Home.scss"

const Home: React.FC = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [name, setName] = useState("")
	// const [input, setInput] = useState("")

	const onDocumentLoadSuccess = () => {
		setPageNumber(1)
	}

	// const handleAdd = () => {
	// 	setInput("")
	// }

	return (
		<div className='home-wrapper'>
			<div className='key'>
				{/* <div className='add'>
					<input
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<button className='btn-add' onClick={handleAdd}>
						Add
					</button>
				</div> */}
				<button
					name='google'
					onClick={(e: any) => setName(e.target.name)}
				>
					Google
				</button>
				<button
					name='facebook'
					onClick={(e: any) => setName(e.target.name)}
				>
					Facebook
				</button>
				<button
					name='youtube'
					onClick={(e: any) => setName(e.target.name)}
				>
					Youtube
				</button>
			</div>
			<div className='pdf'>
				{name && (
					<Document
						file={{ url: `pdf/${name}` }}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
				)}
			</div>
		</div>
	)
}

export default Home
