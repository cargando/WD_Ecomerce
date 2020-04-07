import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

DropDown.propTypes = {
	title: PropTypes.string.isRequired, // текст - label
	name: PropTypes.string.isRequired, // просто имя компонента для того чтобы использовать в связке с родителем для идентификации того, кто породил событие onChange
	current: PropTypes.string, // значение выбранного элемента (из массива options)
	options: PropTypes.array.isRequired, // массив доступных для выбора значений выпадающего списка
	onChange: PropTypes.func.isRequired, // функция-обработчик изменений значения дропдауна
};

DropDown.defaultProps = {
	options: [],
};

function DropDown(props) {

	const [isOpened, setIsOpened] = useState(false);

	const {
		name,
		options,
		current,
		title,
		onChange,
	} = props;


	function renderOptions() {


		return (
			<ul className="list">
				{
					options.map((item, index) => {
						return (
							<li
								data-id={ index }
								className={ `option ${ current == index && 'selected' }` }
								onClick={ handleClickOption }
							>
								{
									item
								}
							</li>)
					})
				}
			</ul>
		);
	}

	function handleClickOption(e) {
		const val = e.target.getAttribute("data-id");
		onChange(val, name);
	}


	function handleClick(e) {
		setIsOpened(!isOpened);
	}


	return (
		<div className="sort-by-date d-flex align-items-center mr-15">
			<p>{ title }</p>
			<form action="#" method="get">
				<div
					className={ `nice-select ${ isOpened && 'open'}` }
					tabIndex="0"
					onClick={ handleClick }
				>
					<span className="current">
						{
							options[ current ] || ''
						}
					</span>
					{
						renderOptions()
					}
				</div>
			</form>
		</div>
	);
}

export default DropDown;
