Espo.define('custom:views/fields/c-phone', 'views/fields/base', function (Dep) {

    return Dep.extend({

        listTemplate: 'custom:fields/c-phone/list',
        editTemplate: 'custom:fields/c-phone/edit',

        events: {
            'click .icon-viber': function (e) {
                this.toggleFlag(e, 'isViber');
            },
            'click .icon-telegram': function (e) {
                this.toggleFlag(e, 'isTelegram');
            },
            'click .icon-whatsapp': function (e) {
                this.toggleFlag(e, 'isWhatsapp');
            }
        },

        setup: function () {
            Dep.prototype.setup.call(this);

            if (!this.model.get(this.name)) {
                this.model.set(this.name, []);
            }
        },

        toggleFlag: function (e, flag) {
            const index = $(e.currentTarget).closest('.cphone-row').data('index');

            const data = this.model.get(this.name);
            data[index][flag] = !data[index][flag];

            this.model.set(this.name, data);
            this.reRender();
        },

        addItem: function () {
            const data = this.model.get(this.name) || [];

            data.push({
                phoneNumber: '',
                isViber: false,
                isTelegram: false,
                isWhatsapp: false
            });

            this.model.set(this.name, data);
            this.reRender();
        },

        removeItem: function (i) {
            const data = this.model.get(this.name);
            data.splice(i, 1);
            this.model.set(this.name, data);
            this.reRender();
        }
    });
});
