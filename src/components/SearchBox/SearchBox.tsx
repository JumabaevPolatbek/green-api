import React from 'react';
type Props={
	setSearchValue:React.Dispatch<React.SetStateAction<string>>
}
const SearchBox:React.FC<Props> = ({setSearchValue}) => {
	const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{

	}
	return (
		<div className={`row searchBox`}>
			<div className={`col-sm-12 searchBox-inner`}>
				<div className='form-group has-feedback'>
					<input
						id='searchText'
						type='text'
						className='form-control'
						name='searchText'
						placeholder='Search'
						// onChange={()}
					/>
					<span className='glyphicon glyphicon-search form-control-feedback'></span>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
