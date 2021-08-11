import Books_list from '../datas/data_book.json'

function Books() {
	return (
		<div className="container">
			
			{Object.entries(Books_list).map(([key,value],i) => 
				<div className='lmj-title item' key={i} value={key*2}>
					
					<div className="text">
					{value.title}<br/>
					{value.volume}<br/>
					{value.author}<br/>
					{value.date}<br/>
					{value.pages}<br/>
					{value.isbn10}<br/>
					{value.isbn13%2===0 ? <span className='isbnBlue'>{value.isbn13}</span> : <span className='isbnGreen'>{value.isbn13}</span>}<br/>
					{value.price}
					</div>
				</div>
			)}
			
		</div>
	)
}

export default Books