<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Artega_Wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'siOO<8$Kp`WGo;~l@q;t}fv|uP[9k8 O$f.XqfH/y@N7NFU]3v;X,fr[??e0]_T`' );
define( 'SECURE_AUTH_KEY',  'CcGb,RW/w{xhIBr[b%tY=~m{+? h1|;`Yc|&S}pk>2lP/NRAlb QFY`P?|.j!_S#' );
define( 'LOGGED_IN_KEY',    'v-E,WeIpT@aE=?&/wzK<w}3zj$Ek6Yb7~| .TgU-cI*d!LALWUm)D|RrW*nftP/S' );
define( 'NONCE_KEY',        'p>W6XNRK[Mes]+-3IYuNmU9zm8`Ye2sGtC7a>WJfovJIr74rG$)9|ke/=B2OQ4|3' );
define( 'AUTH_SALT',        '@s-Be058k81N(d8T^XdB$UWZw{1LYgiW5y!(14ipi^03th(.yhW5wT8+o.A<Te(!' );
define( 'SECURE_AUTH_SALT', 'cu]6UkA|E;WPR56$:C,[zwQg;YO|Xl6qseJq{,4X?{kVRgX@tll4+rINO)a{E[Ue' );
define( 'LOGGED_IN_SALT',   'v`&dF3EV#fx !=<{;0>z?K Vx+WNz4iD~aC@Cv!qzbG.?7Rcu<%%c^,n[&X@%]n9' );
define( 'NONCE_SALT',       'sFvHa6.A5~1lMTo}0E^Ip#ApQZ4FHIU/>/GzLdKd.fXt*M6Nys. =Xgmd?Sxdg@M' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
