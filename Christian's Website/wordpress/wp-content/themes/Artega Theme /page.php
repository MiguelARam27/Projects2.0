<?php include 'header.php' ?>
<?php 

include 'nav.php'
?>
<section id="page-template">
    <div class="container">
        <?php  if(have_posts()):while (have_posts()) : the_post();?>
        <?php the_content(); ?>
        <?php  endwhile; endif; ?>
    </div>

</section>



<?php  include 'footer.php' ?>