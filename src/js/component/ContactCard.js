import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const ContactCard = props => {
	/* const [state, setState] = useState({
		//initialize state here
	}); */

	const { store, actions } = useContext(Context);

	return store.agendas.map((contacto, index) => (
		<li className="list-group-item" key={contacto.id}>
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link
							className="btn"
							to={`/edit/${index + 1}`}
							onClick={() => actions.getContactos(store.agendas[index])}>
							<i className="fas fa-pencil-alt mr-3" />
						</Link>
						<button
							className="btn"
							index={index}
							onClick={
								() => props.onDelete(actions.getId(store.agendas[index].id))
								/* actions.getDelete(store.agendas[index].id) */
							}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead"> {contacto.full_name} </label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{contacto.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{contacto.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{contacto.email}</span>
				</div>
			</div>
		</li>
	));
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	index: PropTypes.any
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
	/* index: 1 */
};

//onClick={() => /* console.log("pencil") */ actions.getUpdate(contacto)}
