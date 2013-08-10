<input id="toggle" type="checkbox" class="nomobile" />
<label id="despliega" for="toggle" class="nomobile icon-chevron-down" onclick></label>

<div id="mainsidebar">
<label for="toggle" class="repliega nomobile icon-remove-sign" title="cerrar" onclick></label>
<div class="sidebar">
<div class="padding-top"><h3><a href="<?php echo get_site_url(); ?>" class="icon-home">Ir a la p&aacute;gina principal</a></h3></div>
<?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('widget-area-1')) ?>
</div>
<div class="sidebar">
<?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('widget-area-2')) ?>
</div>
<div class="sidebar">
<?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('widget-area-3')) ?>
</div>
</div>
