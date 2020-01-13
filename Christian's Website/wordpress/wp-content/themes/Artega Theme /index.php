<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">

  <?php include 'header.php' ?>
<body <?php body_class(); ?> >
<div class="page">
            <div class="container">
                    
                    <?php 
                  
                       include 'nav.php'
                    ?>
                    <div class="top">
                        <div class="name">
                        <?php 
                        $mypod = pods('picname');
                        $mypod->find('name ASC');
                        
                      ?>
                      <?php  while($mypod->fetch()):?>
                          <?php 
                          $name = $mypod->field('name');
                          $content =$mypod->field('content');
                          ?>
                        <h1><?php echo $name?></h1>
                        <hr>
                        <h2><?php echo $content?></h2>
                      <?php endwhile;?>
                        </div>
                    </div>
                    <div class="about_container">
                    <?php 
                        $mypod = pods('about_info');
                        $mypod->find('name ASC');
                        
                      ?>
                      <?php  while($mypod->fetch()):?>
                          <?php 
                          $name = $mypod->field('name');
                          $paragraph1 =$mypod->field('paragraph1');
                          $paragraph2 = $mypod->field('paragraph2');
                          $paragraph3 = $mypod->field('paragraph3');
                          $paragraph4 = $mypod->field('paragraph4');
                          ?>

                        <div class="title">
                            <h1><?php echo $name?></h1>
                            <span class="bar"></span>
                        </div>
                        <div class="about">
                            <div class="info">
                                <p>
                                  <?php echo $paragraph1?>
                                </p>
                                <p>
                                  <?php echo $paragraph2?>
                                </p> 
                                <p>
                                  <?php echo $paragraph3?>
                                </p>
                                <p><?php echo $paragraph4?></p>
                            </div>
                            <div class="pic">
                               
                            </div>
                        </div>
                      <?php endwhile;?>
                    
                     
                    </div>
                    <!-- <section id="services" class="sec-services">
                      <div class="container">
                        <h1>Services</h1>
                  
                        <hr />
                  
                        <div class="row">
                          <div class="col-sm-4">
                            <i class="fa fa-4x fa-paint-brush"></i>
                  
                            <h2 class="h3">Beautiful Design</h2>
                  
                            <p>Every website is beautiful, unique and tailored to suit your needs and requirements.</p>
                          </div>
                  
                          <div class="col-sm-4">
                            <i class="fa fa-4x fa-code"></i>
                  
                            <h2 class="h3">Clean Code</h2>
                  
                            <p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
                          </div>
                  
                          <div class="col-sm-4">
                            <i class="fa fa-4x fa-tablet"></i>
                  
                            <h2 class="h3">Always Responsive</h2>
                  
                            <p>All websites are responsive. They will look great on desktop, tablets and mobile phones too.</p>
                          </div>
                        </div>
                      </div>
                    </section> -->
                        <!-- <div class="about">
                            <div class="info">
                                <div class="about">
                                        <h1>About Me</h1> 
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eveniet quia corrupti minima obcaecati at rem ducimus iste. Eveniet nostrum magni illum expedita provident ipsa sed modi dicta in eligendi!</p>
                            </div>
                            <div class="pic">
                                
                            </div> -->
                            <section class="services">
                                <div class="title">
                                    <h1>SIGNIFICANT WORK AND INNOVATIONS</h1>
                                    <span class="bar"></span>
                                </div>
                                <div class="service_container">
                                  <div class="info_card">
                                      <img src="https://picsum.photos/id/1029/600/400">
                                    <div class="info">
                                        <h1>Mastery of complex infrastructure work</h1>
                                        <p>Large, complex infrastructure projects demand a special skill set — the ability
                                            to see the 10,000-foot view and the meticulous details simultaneously, and the vision and ability to puzzle together a million moving parts. </p>
                                            <br>
                                            <p>JC has mastered these challenging projects. His leadership and strategic aptitude have made an impact on a $2.1 billion milestone expansion project at Orlando International Airport, the $3.1 billion North Terminal Development (NTD) Program at Miami International Airport, the $13.5 billion Capital Improvement Program at the Miami Dade Water and Sewer Department and other large projects.</p>
                                    </div>
                                  </div>
                                  <div class="info_card">
                                      <img src="../assets/example.jpeg">
                                    <div class="info">
                                        <h1>Big, out-of-the-box thinking means huge savings</h1>
                                        <p>When JC took over the NTD Program at Miami International Airport, he examined the plans with a fresh eye, seeking to drive efficiency while maintaining the design vision. He discovered the project was initially planned as “airside” construction, meaning all work must be completed within the TSA safety bubble. This complicated almost every part of the building process, including finding workers who could meet stringent security standards.</p>
                                        <br>
                                        <p>JC led a team that shifted the program to a “landside” project while maintaining 24/7 operations. JC sought and won approval for this simple but dramatic solution from all stakeholders. The shift eased security requirements and helped save 1,200 man hours per day, shaving $300 million and more than a year off the project budget and schedule</p>
                                    </div>
                                  </div>
                                  <div class="info_card">
                                      <img src="https://picsum.photos/id/134/600/400">
                                    
                        
                                    <div class="info">
                                        <h1>Visionary strategy for everyday services</h1>
                                        <p>Not often is a public utility commended for its visionary outlook and action plan. With JC’s team leadership, the Miami Dade Water and Sewer department (WASD) earned that reputation with a $13.5 billion Capital Improvement Program (CIP). </p>
                                        <br>
                                        <p>The WASD is enormous, serving 2.3 million people and covering 400 square miles. JC led the team in developing the CIP master plan, which focuses on building resilience. The WASD is already in the fourth year of the plan, completing more than 775 projects. The work ensures Miami Dade County citizens can count on efficient water and wastewater systems well into the future — through continued population growth, potential natural disasters, rising sea levels, climate change and new regulations.</p>
                                    </div>
                                  </div>
                                  <div class="info_card">
                                      <img src="../assets/skool.jpg">
                                    <div class="info">
                                        <h1>
                                            Educating the next generation</h1>
                                        <p>Reflecting on the dramatic difference education made in his life, JC made an early career commitment to educating the next generation of building professionals. Early in his career, he served as an assistant professor for a year at University Mayor de San Simon and a professor for five years at Universidad Privada
                                            de Santa Cruz. More recently, he’s spent a decade as an adjunct professor at Florida International University, covering topics ranging from design-build code synergies to how risk should be managed on large, complex projects. He also grows the profession through mentoring young professionals on job sites.</p>
                                        <br>
                                        <p>Though JC regularly manages projects involving more than 100 companies,
                                            he has a special diplomatic gift for identifying alignment opportunities and breaking down walls. Because he’s participated on all sides of the building construction spectrum — alternately serving as the design professional, building professional, general contractor and owner’s representative, among other
                                            roles — he’s better equipped to understand the needs and requirements of all stakeholders. His distinctive approach improves the project and strengthens all professionals involved.</p>
                                    </div>
                                  </div>
                                  <div class="info_card">
                                      <img src="https://picsum.photos/id/1033/600/400">
                                    <div class="info">
                                        <h1>Innovating through rephasing, reworking and rebidding</h1>
                                        <p>The NTD Program at Miami International Airport was in crisis when JC took over. He led a team that reworked the drawings, re-bid work and established an owner’s review board. The team ensured budget adherence with a total cost management approach and put both a detailed change management system and independent change management board into place to control scope changes. JC’s commitment to aligning the goals of 100+ member firms allowed each to achieve individual success while supporting client success.</p>
                                        <br>
                                        <p>With his extensive knowledge of code compliance as a building code official, JC realized that keeping the height of the highest occupied floor under
                                            75 feet in the Orlando International Airport South Terminal would mean the building wouldn’t be considered a high-rise building. He suggested reducing the height of the space minimally, a small change that maintained the aesthetic intention but eliminated the need for an expensive, heavy maintenance smoke evacuation system, reducing the building cost by $45 million.</p>
                                    </div>
                                  </div>
                                  <div class="info_card">
                                      <img src="https://picsum.photos/id/212/600/400">
                                    <div class="info">
                                        <h1> Reflecting culture with buildings and infrastructure</h1>
                                        <p>JC believes it’s essential that architecture reflect the soul of a place and its people, especially with operationally-focused, utilitarian projects.
                                            In Bolivia, he witnessed the pride citizens took in homes that were little more than four walls and dirt floors. Yet, connected to the local vernacular, these structures became more vital. Believing that globalization puts that perspective at risk, he emphasizes contextual design. For example, the addition to the Orlando International Airport reflects the region’s water, skies and foliage
                                            — and underscores the “Orlando Experience” provided by the city’s welcoming, tourism-focused residents</p>
                                        <br>
                                        <p>In Bolivia, JC grew up amid great poverty, but also immense pride. The country was home to stunning natural landscapes, but also the constant threat of deforestation. Even as a child, JC understood the power of architecture to change lives and perceptions. He discovered the power was magnified with a design approach that integrated society, art and nature. That credo has influenced his design and strategy on every project since, from modest buildings to massive infrastructure projects.</p>
                                    </div>
                                  </div>
                            </section>
                          <?php
                             include 'footer.php'
                          ?>
                         
                </div>
        </div>
  </div>
  
   
    
</body>
</html>