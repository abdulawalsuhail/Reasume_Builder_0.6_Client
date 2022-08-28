import React from 'react';

const TemplateModal = ({ templateModal }) => {
    console.log(templateModal);
    return (
        <div>
            <input type="checkbox" id="template_modal" class="modal-toggle" />
            <div class="modal modal-middle">
                <div class="modal-box">
                    <label for="template_modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={templateModal.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TemplateModal;