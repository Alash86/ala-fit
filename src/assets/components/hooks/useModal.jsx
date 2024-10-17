import { useState } from "react";

function useModal() {
    const [isVisible, setIsVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const openModal = (newTitle, newBody) => {
        setTitle(newTitle)
        setBody(newBody)
        setIsVisible(true)

    }

    const closeModal = () => {
        setIsVisible(false)
    }
    const Modal = () => (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form className="d-flex flex-column justify-content-center align-items-center">

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="email1">Email address</label>
                            <input type="email" id="email1" className="form-control" />

                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="password1">Password</label>
                            <input type="password" id="password1" className="form-control" />

                        </div>


                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );

    return { openModal, closeModal, Modal };

}
export default useModal
