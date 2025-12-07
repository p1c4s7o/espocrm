<ul class="cphone-list">
    {{#each value}}
    <li>
        {{this.phoneNumber}}

        {{#if this.isViber}}
        <span class="icon icon-viber"></span>
        {{/if}}
        {{#if this.isTelegram}}
        <span class="icon icon-telegram"></span>
        {{/if}}
        {{#if this.isWhatsapp}}
        <span class="icon icon-whatsapp"></span>
        {{/if}}
    </li>
    {{/each}}
</ul>
