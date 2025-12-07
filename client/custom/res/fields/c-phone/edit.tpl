<div class="cphone-field">
    {{#each value}}
    <div class="cphone-row" data-index="{{@index}}">
        <input type="text"
               class="form-control"
               value="{{this.phoneNumber}}"
               data-name="phoneNumber"
               style="width: 200px; display: inline-block;">

        <span class="icon icon-viber {{#if this.isViber}}active{{/if}}"></span>
        <span class="icon icon-telegram {{#if this.isTelegram}}active{{/if}}"></span>
        <span class="icon icon-whatsapp {{#if this.isWhatsapp}}active{{/if}}"></span>

        <span class="btn btn-link text-danger" data-action="remove" data-index="{{@index}}">×</span>
    </div>
    {{/each}}

    <button class="btn btn-default" data-action="add">+</button>
</div>
