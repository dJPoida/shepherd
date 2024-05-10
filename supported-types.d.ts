// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes } from "@hakit/core";
declare module "@hakit/core" {
  export interface CustomSupportedServices<
    T extends ServiceFunctionTypes = "target",
  > {
    homeassistant: {
      // Saves the persistent states immediately. Maintains the normal periodic saving interval.
      savePersistentStates: ServiceFunction<T, object>;
      // Generic service to turn devices off under any domain.
      turnOff: ServiceFunction<T, object>;
      // Generic service to turn devices on under any domain.
      turnOn: ServiceFunction<T, object>;
      // Generic service to toggle devices on/off under any domain.
      toggle: ServiceFunction<T, object>;
      // Stops Home Assistant.
      stop: ServiceFunction<T, object>;
      // Restarts Home Assistant.
      restart: ServiceFunction<T, object>;
      // Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
      checkConfig: ServiceFunction<T, object>;
      // Forces one or more entities to update its data.
      updateEntity: ServiceFunction<T, object>;
      // Reloads the core configuration from the YAML-configuration.
      reloadCoreConfig: ServiceFunction<T, object>;
      // Updates the Home Assistant location.
      setLocation: ServiceFunction<
        T,
        {
          // Latitude of your location. @example 32.87336
          latitude: number;
          // Longitude of your location. @example 117.22743
          longitude: number;
          // Elevation of your location. @example 120
          elevation?: number;
        }
      >;
      // Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
      reloadCustomTemplates: ServiceFunction<T, object>;
      // Reloads the specified config entry.
      reloadConfigEntry: ServiceFunction<
        T,
        {
          // The configuration entry ID of the entry to be reloaded. @example 8955375327824e14ba89e4b29cc3ec9a
          entry_id?: string;
        }
      >;
      // Reload all YAML configuration that can be reloaded without restarting Home Assistant.
      reloadAll: ServiceFunction<T, object>;
    };
    persistentNotification: {
      // Shows a notification on the **Notifications** panel.
      create: ServiceFunction<
        T,
        {
          // Message body of the notification. @example Please check your configuration.yaml.
          message: string;
          // Optional title of the notification. @example Test notification
          title?: string;
          // ID of the notification. This new notification will overwrite an existing notification with the same ID. @example 1234
          notification_id?: string;
        }
      >;
      // Removes a notification from the **Notifications** panel.
      dismiss: ServiceFunction<
        T,
        {
          // ID of the notification to be removed. @example 1234
          notification_id: string;
        }
      >;
      // Removes all notifications from the **Notifications** panel.
      dismissAll: ServiceFunction<T, object>;
    };
    systemLog: {
      // Clears all log entries.
      clear: ServiceFunction<T, object>;
      // Write log entry.
      write: ServiceFunction<
        T,
        {
          // Message to log. @example Something went wrong
          message: string;
          // Log level.
          level?: "debug" | "info" | "warning" | "error" | "critical";
          // Logger name under which to log the message. Defaults to `system_log.external`. @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // Sets the default log level for integrations.
      setDefaultLevel: ServiceFunction<
        T,
        {
          // Default severity level for all integrations.
          level?: "debug" | "info" | "warning" | "error" | "fatal" | "critical";
        }
      >;
      // Sets the log level for one or more integrations.
      setLevel: ServiceFunction<T, object>;
    };
    recorder: {
      // Starts purge task - to clean up old data from your database.
      purge: ServiceFunction<
        T,
        {
          // Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged.
          keep_days?: number;
          // Attempt to save disk space by rewriting the entire database file.
          repack?: boolean;
          // Apply `entity_id` and `event_type` filters in addition to time-based purge.
          apply_filter?: boolean;
        }
      >;
      // Starts a purge task to remove the data related to specific entities from your database.
      purgeEntities: ServiceFunction<
        T,
        {
          // List of entities for which the data is to be removed from the recorder database.
          entity_id?: string;
          // List of domains for which the data needs to be removed from the recorder database. @example sun
          domains?: object;
          // List of glob patterns used to select the entities for which the data is to be removed from the recorder database. @example domain*.object_id*
          entity_globs?: object;
          // Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately.
          keep_days?: number;
        }
      >;
      // Starts the recording of events and state changes.
      enable: ServiceFunction<T, object>;
      // Stops the recording of events and state changes.
      disable: ServiceFunction<T, object>;
    };
    person: {
      // Reloads persons from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    frontend: {
      // Sets the default theme Home Assistant uses. Can be overridden by a user.
      setTheme: ServiceFunction<
        T,
        {
          // Name of a theme. @example default
          name: object;
          // Theme mode.
          mode?: "dark" | "light";
        }
      >;
      // Reloads themes from the YAML-configuration.
      reloadThemes: ServiceFunction<T, object>;
    };
    hassio: {
      // Starts an add-on.
      addonStart: ServiceFunction<
        T,
        {
          // The add-on slug. @example core_ssh
          addon: object;
        }
      >;
      // Stops an add-on.
      addonStop: ServiceFunction<
        T,
        {
          // The add-on slug. @example core_ssh
          addon: object;
        }
      >;
      // Restarts an add-on.
      addonRestart: ServiceFunction<
        T,
        {
          // The add-on slug. @example core_ssh
          addon: object;
        }
      >;
      // Updates an add-on. This service should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.
      addonUpdate: ServiceFunction<
        T,
        {
          // The add-on slug. @example core_ssh
          addon: object;
        }
      >;
      // Writes data to add-on stdin.
      addonStdin: ServiceFunction<
        T,
        {
          // The add-on slug. @example core_ssh
          addon: object;
        }
      >;
      // Powers off the host system.
      hostShutdown: ServiceFunction<T, object>;
      // Reboots the host system.
      hostReboot: ServiceFunction<T, object>;
      // Creates a full backup.
      backupFull: ServiceFunction<
        T,
        {
          // Optional (default = current date and time). @example Backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: object;
          // Exclude the Home Assistant database file from backup
          homeassistant_exclude_database?: boolean;
        }
      >;
      // Creates a partial backup.
      backupPartial: ServiceFunction<
        T,
        {
          // Includes Home Assistant settings in the backup.
          homeassistant?: boolean;
          // Exclude the Home Assistant database file from backup
          homeassistant_exclude_database?: boolean;
          // List of add-ons to include in the backup. Use the name slug of the add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // List of directories to include in the backup. @example homeassistant,share
          folders?: object;
          // Optional (default = current date and time). @example Partial backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: object;
        }
      >;
      // Restores from full backup.
      restoreFull: ServiceFunction<
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Optional password. @example password
          password?: string;
        }
      >;
      // Restores from a partial backup.
      restorePartial: ServiceFunction<
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Restores Home Assistant.
          homeassistant?: boolean;
          // List of directories to include in the backup. @example homeassistant,share
          folders?: object;
          // List of add-ons to include in the backup. Use the name slug of the add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // Optional password. @example password
          password?: string;
        }
      >;
    };
    update: {
      // Installs an update for this device or service.
      install: ServiceFunction<
        T,
        {
          // The version to install. If omitted, the latest version will be installed. @example 1.0.0
          version?: string;
          // If supported by the integration, this creates a backup before starting the update .
          backup?: boolean;
        }
      >;
      // Marks currently available update as skipped.
      skip: ServiceFunction<T, object>;
      // Removes the skipped version marker from an update.
      clearSkipped: ServiceFunction<T, object>;
    };
    cloud: {
      // Makes the instance UI accessible from outside of the local network by using Home Assistant Cloud.
      remoteConnect: ServiceFunction<T, object>;
      // Disconnects the Home Assistant UI from the Home Assistant Cloud. You will no longer be able to access your Home Assistant instance from outside your local network.
      remoteDisconnect: ServiceFunction<T, object>;
    };
    ffmpeg: {
      // Sends a start command to a ffmpeg based sensor.
      start: ServiceFunction<
        T,
        {
          // Name of entity that will start. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a stop command to a ffmpeg based sensor.
      stop: ServiceFunction<
        T,
        {
          // Name of entity that will stop. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a restart command to a ffmpeg based sensor.
      restart: ServiceFunction<
        T,
        {
          // Name of entity that will restart. Platform dependent.
          entity_id?: string;
        }
      >;
    };
    group: {
      // Reloads group configuration, entities, and notify services from YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Creates/Updates a user group.
      set: ServiceFunction<
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: string;
          // Name of the group. @example My test group
          name?: string;
          // Name of the icon for the group. @example mdi:camera
          icon?: object;
          // List of all members in the group. Cannot be used in combination with `Add entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          entities?: string;
          // List of members to be added to the group. Cannot be used in combination with `Entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          add_entities?: string;
          // List of members to be removed from a group. Cannot be used in combination with `Entities` or `Add entities`. @example domain.entity_id1, domain.entity_id2
          remove_entities?: string;
          // Enable this option if the group should only be used when all entities are in state `on`.
          all?: boolean;
        }
      >;
      // Removes a group.
      remove: ServiceFunction<
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: object;
        }
      >;
    };
    light: {
      // Turn on one or more lights and adjust properties of the light, even when they are turned on already.
      turnOn: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.
          rgb_color?: [number, number, number];
          // The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white. @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          // The color in RGBWW format. A list of five integers between 0 and 255 representing the values of red, green, blue, cold white, and warm white. @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          // A human-readable color name.
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          // Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100. @example [300, 70]
          hs_color?: [number, number];
          // Color in XY-format. A list of two decimal numbers between 0 and 1. @example [0.52, 0.43]
          xy_color?: [number, number];
          // Color temperature in mireds.
          color_temp?: number | object;
          // Color temperature in Kelvin.
          kelvin?: number | object;
          // Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.
          brightness?: number;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
          brightness_pct?: number;
          // Change brightness by an amount.
          brightness_step?: number;
          // Change brightness by a percentage.
          brightness_step_pct?: number;
          // Set the light to white mode.
          white?: boolean;
          // Name of a light profile to use. @example relax
          profile?: string;
          // Tell light to flash, can be either value short or long.
          flash?: "long" | "short";
          // Light effect.
          effect?: string;
        }
      >;
      // Turn off one or more lights.
      turnOff: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // Tell light to flash, can be either value short or long.
          flash?: "long" | "short";
        }
      >;
      // Toggles one or more lights, from on to off, or, off to on, based on their current state.
      toggle: ServiceFunction<
        T,
        {
          // Duration it takes to get to next state.
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // A human-readable color name.
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          // Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100. @example [300, 70]
          hs_color?: [number, number];
          // Color in XY-format. A list of two decimal numbers between 0 and 1. @example [0.52, 0.43]
          xy_color?: [number, number];
          // Color temperature in mireds.
          color_temp?: number | object;
          // Color temperature in Kelvin.
          kelvin?: number | object;
          // Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.
          brightness?: number;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
          brightness_pct?: number;
          // Set the light to white mode.
          white?: boolean;
          // Name of a light profile to use. @example relax
          profile?: string;
          // Tell light to flash, can be either value short or long.
          flash?: "long" | "short";
          // Light effect.
          effect?: string;
        }
      >;
    };
    scene: {
      // Activates a scene.
      turnOn: ServiceFunction<
        T,
        {
          // Time it takes the devices to transition into the states defined in the scene.
          transition?: number;
        }
      >;
      // Reloads the scenes from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Activates a scene with configuration.
      apply: ServiceFunction<
        T,
        {
          // List of entities and their target state. @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80
          entities: object;
          // Time it takes the devices to transition into the states defined in the scene.
          transition?: number;
        }
      >;
      // Creates a new scene.
      create: ServiceFunction<
        T,
        {
          // The entity ID of the new scene. @example all_lights
          scene_id: string;
          // List of entities and their target state. If your entities are already in the target state right now, use `snapshot_entities` instead. @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200
          entities?: object;
          // List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine the `snapshot_entities` with `entities`. @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // Deletes a dynamically created scene.
      delete: ServiceFunction<T, object>;
    };
    logbook: {
      // Creates a custom entry in the logbook.
      log: ServiceFunction<
        T,
        {
          // Custom name for an entity, can be referenced using an `entity_id`. @example Kitchen
          name: string;
          // Message of the logbook entry. @example is being used
          message: string;
          // Entity to reference in the logbook entry.
          entity_id?: string;
          // Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry. @example light
          domain?: string;
        }
      >;
    };
    script: {
      //
      matrixIconShowAndHideBell: ServiceFunction<T, object>;
      // Reloads all the available scripts.
      reload: ServiceFunction<T, object>;
      // Runs the sequence of actions defined in a script.
      turnOn: ServiceFunction<T, object>;
      // Stops a running script.
      turnOff: ServiceFunction<T, object>;
      // Toggle a script. Starts it, if isn't running, stops it otherwise.
      toggle: ServiceFunction<T, object>;
    };
    zone: {
      // Reloads zones from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    inputSelect: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Selects the first option.
      selectFirst: ServiceFunction<T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<T, object>;
      // Select the next option.
      selectNext: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Sets the options.
      setOptions: ServiceFunction<
        T,
        {
          // List of options. @example ['Item A', 'Item B', 'Item C']
          options: object;
        }
      >;
    };
    timer: {
      // Reloads timers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Starts a timer.
      start: ServiceFunction<
        T,
        {
          // Duration the timer requires to finish. [optional]. @example 00:01:00 or 60
          duration?: string;
        }
      >;
      // Pauses a timer.
      pause: ServiceFunction<T, object>;
      // Cancels a timer.
      cancel: ServiceFunction<T, object>;
      // Finishes a timer.
      finish: ServiceFunction<T, object>;
      // Changes a timer.
      change: ServiceFunction<
        T,
        {
          // Duration to add or subtract to the running timer. @example 00:01:00, 60 or -60
          duration: string;
        }
      >;
    };
    inputButton: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Mimics the physical button press on the device.
      press: ServiceFunction<T, object>;
    };
    inputBoolean: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Turns on the helper.
      turnOn: ServiceFunction<T, object>;
      // Turns off the helper.
      turnOff: ServiceFunction<T, object>;
      // Toggles the helper on/off.
      toggle: ServiceFunction<T, object>;
    };
    inputNumber: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        T,
        {
          // The target value.
          value: number;
        }
      >;
      // Increments the value by 1 step.
      increment: ServiceFunction<T, object>;
      // Decrements the current value by 1 step.
      decrement: ServiceFunction<T, object>;
    };
    tts: {
      // Speaks something using text-to-speech on a media player.
      speak: ServiceFunction<
        T,
        {
          // Media players to play the message.
          media_player_entity_id: string;
          // The text you want to convert into speech so that you can listen to it on your device. @example My name is hanna
          message: string;
          // Stores this message locally so that when the text is requested again, the output can be produced more quickly.
          cache?: boolean;
          // Language to use for speech generation. @example ru
          language?: string;
          // A dictionary containing integration-specific options. @example platform specific
          options?: object;
        }
      >;
      // Removes all cached text-to-speech files and purges the memory.
      clearCache: ServiceFunction<T, object>;
      // Say something using text-to-speech on a media player with google_translate.
      googleTranslateSay: ServiceFunction<
        T,
        {
          // undefined
          entity_id: string;
          // undefined @example My name is hanna
          message: string;
          // undefined
          cache?: boolean;
          // undefined @example ru
          language?: string;
          // undefined @example platform specific
          options?: object;
        }
      >;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        T,
        {
          // undefined
          entity_id: string;
          // undefined @example My name is hanna
          message: string;
          // undefined
          cache?: boolean;
          // undefined @example ru
          language?: string;
          // undefined @example platform specific
          options?: object;
        }
      >;
    };
    template: {
      // Reloads template entities from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    remote: {
      // Turns the device off.
      turnOff: ServiceFunction<T, object>;
      // Sends the power on command.
      turnOn: ServiceFunction<
        T,
        {
          // Activity ID or activity name to be started. @example BedroomTV
          activity?: string;
        }
      >;
      // Toggles a device on/off.
      toggle: ServiceFunction<T, object>;
      // Sends a command or a list of commands to a device.
      sendCommand: ServiceFunction<
        T,
        {
          // Device ID to send command to. @example 32756745
          device?: string;
          // A single command or a list of commands to send. @example Play
          command: object;
          // The number of times you want to repeat the commands.
          num_repeats?: number;
          // The time you want to wait in between repeated commands.
          delay_secs?: number;
          // The time you want to have it held before the release is send.
          hold_secs?: number;
        }
      >;
      // Learns a command or a list of commands from a device.
      learnCommand: ServiceFunction<
        T,
        {
          // Device ID to learn command from. @example television
          device?: string;
          // A single command or a list of commands to learn. @example Turn on
          command?: object;
          // The type of command to be learned.
          command_type?: "ir" | "rf";
          // If code must be stored as an alternative. This is useful for discrete codes. Discrete codes are used for toggles that only perform one function. For example, a code to only turn a device on. If it is on already, sending the code won't change the state.
          alternative?: boolean;
          // Timeout for the command to be learned.
          timeout?: number;
        }
      >;
      // Deletes a command or a list of commands from the database.
      deleteCommand: ServiceFunction<
        T,
        {
          // Device from which commands will be deleted. @example television
          device?: string;
          // The single command or the list of commands to be deleted. @example Mute
          command: object;
        }
      >;
    };
    cover: {
      // Opens a cover.
      openCover: ServiceFunction<T, object>;
      // Closes a cover.
      closeCover: ServiceFunction<T, object>;
      // Moves a cover to a specific position.
      setCoverPosition: ServiceFunction<
        T,
        {
          // Target position.
          position: number;
        }
      >;
      // Stops the cover movement.
      stopCover: ServiceFunction<T, object>;
      // Toggles a cover open/closed.
      toggle: ServiceFunction<T, object>;
      // Tilts a cover open.
      openCoverTilt: ServiceFunction<T, object>;
      // Tilts a cover to close.
      closeCoverTilt: ServiceFunction<T, object>;
      // Stops a tilting cover movement.
      stopCoverTilt: ServiceFunction<T, object>;
      // Moves a cover tilt to a specific position.
      setCoverTiltPosition: ServiceFunction<
        T,
        {
          // Target tilt positition.
          tilt_position: number;
        }
      >;
      // Toggles a cover tilt open/closed.
      toggleCoverTilt: ServiceFunction<T, object>;
    };
    conversation: {
      // Launches a conversation from a transcribed text.
      process: ServiceFunction<
        T,
        {
          // Transcribed text input. @example Turn all lights on
          text: string;
          // Language of text. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands. @example homeassistant
          agent_id?: object;
          // ID of the conversation, to be able to continue a previous conversation @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // Reloads the intent configuration.
      reload: ServiceFunction<
        T,
        {
          // Language to clear cached intents for. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to reload. @example homeassistant
          agent_id?: object;
        }
      >;
    };
    mediaPlayer: {
      // Turns on the power of the media player.
      turnOn: ServiceFunction<T, object>;
      // Turns off the power of the media player.
      turnOff: ServiceFunction<T, object>;
      // Toggles a media player on/off.
      toggle: ServiceFunction<T, object>;
      // Turns up the volume.
      volumeUp: ServiceFunction<T, object>;
      // Turns down the volume.
      volumeDown: ServiceFunction<T, object>;
      // Toggles play/pause.
      mediaPlayPause: ServiceFunction<T, object>;
      // Starts playing.
      mediaPlay: ServiceFunction<T, object>;
      // Pauses.
      mediaPause: ServiceFunction<T, object>;
      // Stops playing.
      mediaStop: ServiceFunction<T, object>;
      // Selects the next track.
      mediaNextTrack: ServiceFunction<T, object>;
      // Selects the previous track.
      mediaPreviousTrack: ServiceFunction<T, object>;
      // Clears the playlist.
      clearPlaylist: ServiceFunction<T, object>;
      // Sets the volume level.
      volumeSet: ServiceFunction<
        T,
        {
          // The volume. 0 is inaudible, 1 is the maximum volume.
          volume_level: number;
        }
      >;
      // Mutes or unmutes the media player.
      volumeMute: ServiceFunction<
        T,
        {
          // Defines whether or not it is muted.
          is_volume_muted: boolean;
        }
      >;
      // Allows you to go to a different part of the media that is currently playing.
      mediaSeek: ServiceFunction<
        T,
        {
          // Target position in the currently playing media. The format is platform dependent.
          seek_position: number;
        }
      >;
      // Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
      join: ServiceFunction<
        T,
        {
          // The players which will be synced with the playback specified in `target`. @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // Sends the media player the command to change input source.
      selectSource: ServiceFunction<
        T,
        {
          // Name of the source to switch to. Platform dependent. @example video1
          source: string;
        }
      >;
      // Selects a specific sound mode.
      selectSoundMode: ServiceFunction<
        T,
        {
          // Name of the sound mode to switch to. @example Music
          sound_mode?: string;
        }
      >;
      // Starts playing specified media.
      playMedia: ServiceFunction<
        T,
        {
          // The ID of the content to play. Platform dependent. @example https://home-assistant.io/images/cast/splash.png
          media_content_id: string | number;
          // The type of the content to play. Such as image, music, tv show, video, episode, channel, or playlist. @example music
          media_content_type: string;
          // If the content should be played now or be added to the queue.
          enqueue?: "play" | "next" | "add" | "replace";
          // If the media should be played as an announcement. @example true
          announce?: boolean;
        }
      >;
      // Playback mode that selects the media in randomized order.
      shuffleSet: ServiceFunction<
        T,
        {
          // Whether or not shuffle mode is enabled.
          shuffle: boolean;
        }
      >;
      // Removes the player from a group. Only works on platforms which support player groups.
      unjoin: ServiceFunction<T, object>;
      // Playback mode that plays the media in a loop.
      repeatSet: ServiceFunction<
        T,
        {
          // Repeat mode to set.
          repeat: "off" | "all" | "one";
        }
      >;
    };
    number: {
      // Sets the value of a number.
      setValue: ServiceFunction<
        T,
        {
          // The target value to set. @example 42
          value?: string;
        }
      >;
    };
    select: {
      // Selects the first option.
      selectFirst: ServiceFunction<T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<T, object>;
      // Selects the next option.
      selectNext: ServiceFunction<
        T,
        {
          // If the option should cycle from the last to the first.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        T,
        {
          // If the option should cycle from the first to the last.
          cycle?: boolean;
        }
      >;
    };
    schedule: {
      // Reloads schedules from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    sonoff: {
      // Sends a command to a device.
      sendCommand: ServiceFunction<
        T,
        {
          // Device ID to send command to. @example 1000123456
          device?: object;
          // A single command to send. @example switch
          cmd?: object;
        }
      >;
    };
    counter: {
      // Increments a counter.
      increment: ServiceFunction<T, object>;
      // Decrements a counter.
      decrement: ServiceFunction<T, object>;
      // Resets a counter.
      reset: ServiceFunction<T, object>;
      // Sets the counter value.
      setValue: ServiceFunction<
        T,
        {
          // The new counter value the entity should be set to.
          value: number;
        }
      >;
    };
    inputDatetime: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the date and/or time.
      setDatetime: ServiceFunction<
        T,
        {
          // The target date. @example '2019-04-20'
          date?: string;
          // The target time. @example '05:04:20'
          time?: object;
          // The target date & time. @example '2019-04-20 05:04:20'
          datetime?: string;
          // The target date & time, expressed by a UNIX timestamp.
          timestamp?: number;
        }
      >;
    };
    restCommand: {
      //
      studioDashboardSleep: ServiceFunction<T, object>;
      //
      studioDashboardWake: ServiceFunction<T, object>;
      //
      studioDashboardSetBrightness: ServiceFunction<T, object>;
      //
      studioDashboardUpdateBrightness: ServiceFunction<T, object>;
      // Reloads RESTful commands from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    inputText: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        T,
        {
          // The target value. @example This is an example text
          value: string;
        }
      >;
    };
    cast: {
      // Shows a dashboard view on a Chromecast device.
      showLovelaceView: ServiceFunction<
        T,
        {
          // Media player entity to show the dashboard view on.
          entity_id: string;
          // The URL path of the dashboard to show. @example lovelace-cast
          dashboard_path: string;
          // The path of the dashboard view to show. @example downstairs
          view_path?: string;
        }
      >;
    };
    notify: {
      // Sends a notification message.
      sendMessage: ServiceFunction<
        T,
        {
          // Your notification message.
          message: string;
        }
      >;
      // Sends a notification that is visible in the **Notifications** panel.
      persistentNotification: ServiceFunction<
        T,
        {
          // Message body of the notification. @example The garage door has been open for 10 minutes.
          message: string;
          // Title of the notification. @example Your Garage Door Friend
          title?: string;
          // Some integrations provide extended functionality. For information on how to use _data_, refer to the integration documentation.. @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_tablet integration.
      mobileAppTablet: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_kayleys_phone integration.
      mobileAppKayleysPhone: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_pete_s_phone integration.
      mobileAppPeteSPhone: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_pete_s_oppo_find_x3_pro integration.
      mobileAppPeteSOppoFindX3Pro: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_pete_s_galaxy_watch integration.
      mobileAppPeteSGalaxyWatch: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the google_assistant_sdk service.
      googleAssistantSdk: ServiceFunction<
        T,
        {
          // undefined @example The garage door has been open for 10 minutes.
          message: string;
          // undefined @example Your Garage Door Friend
          title?: string;
          // undefined @example platform specific
          target?: object;
          // undefined @example platform specific
          data?: object;
        }
      >;
    };
    googleAssistant: {
      // Sends a request_sync command to Google.
      requestSync: ServiceFunction<
        T,
        {
          // Only needed for automations. Specific Home Assistant user id (not username, ID in configuration > users > under username) to sync with Google Assistant. Do not need when you call this service through Home Assistant front end or API. Used in automation script or other place where context.user_id is missing.
          agent_user_id?: string;
        }
      >;
    };
    deviceTracker: {
      // Records a seen tracked device.
      see: ServiceFunction<
        T,
        {
          // MAC address of the device. @example FF:FF:FF:FF:FF:FF
          mac?: string;
          // ID of the device (find the ID in `known_devices.yaml`). @example phonedave
          dev_id?: string;
          // Hostname of the device. @example Dave
          host_name?: string;
          // Name of the location where the device is located. The options are: `home`, `not_home`, or the name of the zone. @example home
          location_name?: string;
          // GPS coordinates where the device is located, specified by latitude and longitude (for example: [51.513845, -0.100539]). @example [51.509802, -0.086692]
          gps?: object;
          // Accuracy of the GPS coordinates.
          gps_accuracy?: number;
          // Battery level of the device.
          battery?: number;
        }
      >;
    };
    camera: {
      // Enables the motion detection.
      enableMotionDetection: ServiceFunction<T, object>;
      // Disables the motion detection.
      disableMotionDetection: ServiceFunction<T, object>;
      // Turns off the camera.
      turnOff: ServiceFunction<T, object>;
      // Turns on the camera.
      turnOn: ServiceFunction<T, object>;
      // Takes a snapshot from a camera.
      snapshot: ServiceFunction<
        T,
        {
          // Template of a filename. Variable available is `entity_id`. @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // Plays the camera stream on a supported media player.
      playStream: ServiceFunction<
        T,
        {
          // Media players to stream to.
          media_player: string;
          // Stream format supported by the media player.
          format?: "hls";
        }
      >;
      // Creates a recording of a live camera feed.
      record: ServiceFunction<
        T,
        {
          // Template of a filename. Variable available is `entity_id`. Must be mp4. @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          // Planned duration of the recording. The actual duration may vary.
          duration?: number;
          // Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.
          lookback?: number;
        }
      >;
    };
    browserMod: {
      // Run a sequence of services
      sequence: ServiceFunction<
        T,
        {
          // List of services to run
          sequence?: object;
        }
      >;
      // Wait for a time
      delay: ServiceFunction<
        T,
        {
          // Time to wait (ms)
          time?: number;
        }
      >;
      // Display a popup
      popup: ServiceFunction<
        T,
        {
          // Popup title
          title?: string;
          // Popup content (Test or lovelace card configuration)
          content: object;
          //
          size?: "normal" | "wide" | "fullscreen";
          // Text of the right button
          right_button?: string;
          // Action to perform when the right button is pressed
          right_button_action?: object;
          // Text of the left button
          left_button?: string;
          // Action to perform when left button is pressed
          left_button_action?: object;
          // Whether the popup can be closed by the user without action
          dismissable?: boolean;
          // Action to perform when popup is dismissed
          dismiss_action?: object;
          // Close the popup automatically on mouse, pointer or keyboard activity
          autoclose?: boolean;
          // Time before closing (ms)
          timeout?: number;
          // Action to perform when popup is closed by timeout
          timeout_action?: object;
          // CSS code to apply to the popup window
          style?: string;
        }
      >;
      // Show more-info dialog
      moreInfo: ServiceFunction<
        T,
        {
          //
          entity: string;
          //
          large?: boolean;
          //
          ignore_popup_card?: boolean;
        }
      >;
      // Close a popup
      closePopup: ServiceFunction<T, object>;
      // Display a short notification
      notification: ServiceFunction<
        T,
        {
          // Message to display
          message: string;
          // Time before closing (ms)
          duration?: number;
          // Text of optional action button
          action_text?: string;
          // Action to perform when the action button is pressed
          action?: object;
        }
      >;
      // Navigate browser to a different page
      navigate: ServiceFunction<
        T,
        {
          // Target path
          path?: string;
        }
      >;
      // Refresh page
      refresh: ServiceFunction<T, object>;
      // Change the current theme
      setTheme: ServiceFunction<
        T,
        {
          // Name of theme or 'auto'
          theme?: string;
          // Dark/light mode
          dark?: "auto" | "light" | "dark";
          // Primary theme color
          primaryColor?: object;
          // Accent theme color
          accentColor?: object;
        }
      >;
      // Print text to browser console
      console: ServiceFunction<
        T,
        {
          // Text to print
          message?: string;
        }
      >;
      // Run arbitrary JavaScript code
      javascript: ServiceFunction<
        T,
        {
          // JavaScript code to run
          code?: object;
        }
      >;
    };
    mqtt: {
      // Publishes a message to an MQTT topic.
      publish: ServiceFunction<
        T,
        {
          // Topic to publish to. @example /homeassistant/hello
          topic: string;
          // The payload to publish. @example This is great
          payload?: string;
          // Template to render as a payload value. If a payload is provided, the template is ignored. @example {{ states('sensor.temperature') }}
          payload_template?: object;
          // Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.
          qos?: "0" | "1" | "2";
          // If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.
          retain?: boolean;
        }
      >;
      // Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.
      dump: ServiceFunction<
        T,
        {
          // Topic to listen to. @example OpenZWave/#
          topic?: string;
          // How long we should listen for messages in seconds.
          duration?: number;
        }
      >;
      // Reloads MQTT entities from the YAML-configuration.
      reload: ServiceFunction<T, object>;
    };
    mass: {
      // Perform a global search on the Music Assistant library and all providers.
      search: ServiceFunction<
        T,
        {
          // The name/title to search for. @example We Are The Champions
          name: string;
          // The type of the content to search. Such as artist, album, track, radio or playlist. All types if omitted. @example playlist
          media_type?: "artist" | "album" | "playlist" | "track" | "radio";
          // When specifying a track or album name in the name field, you can optionally restrict results by this artist name. @example Queen
          artist?: string;
          // When specifying a track name in the name field, you can optionally restrict results by this album name. @example News of the world
          album?: string;
          // Maximum number of items to return (per media type). @example 25
          limit?: number;
        }
      >;
      // Play media on a Music Assistant player with more fine grained control options.
      playMedia: ServiceFunction<
        T,
        {
          // URI or name of the item you want to play. Specify a list if you want to play/enqueue multiple items. @example spotify://playlist/aabbccddeeff
          media_id: object;
          // The type of the content to play. Such as artist, album, track or playlist. Will be auto determined if omitted. @example playlist
          media_type?: "artist" | "album" | "playlist" | "track" | "radio";
          // When specifying a track or album by name in the Media ID field, you can optionally restrict results by this artist name. @example Queen
          artist?: string;
          // When specifying a track by name in the Media ID field, you can optionally restrict results by this album name. @example News of the world
          album?: string;
          // If the content should be played now or be added to the queue. Options are: play, replace, next, replace_next, add
          enqueue?: "play" | "replace" | "next" | "replace_next" | "add";
          // Enable radio mode to auto generate a playlist based on the selection.
          radio_mode?: boolean;
          // If the media should be played as an announcement. @example true
          announce?: boolean;
          // Use pre-announcement sound for the announcement. Used with the announce option, omit to use player default. @example true
          use_pre_announce?: boolean;
          // Use a forced volume level for the announcement. Used with the announce option, omit to use player default. @example 75
          announce_volume?: number;
        }
      >;
    };
    fan: {
      // Turns fan on.
      turnOn: ServiceFunction<
        T,
        {
          // Speed of the fan.
          percentage?: number;
          // Preset mode. @example auto
          preset_mode?: string;
        }
      >;
      // Turns fan off.
      turnOff: ServiceFunction<T, object>;
      // Toggles the fan on/off.
      toggle: ServiceFunction<T, object>;
      // Increases the speed of the fan.
      increaseSpeed: ServiceFunction<
        T,
        {
          // Increases the speed by a percentage step.
          percentage_step?: number;
        }
      >;
      // Decreases the speed of the fan.
      decreaseSpeed: ServiceFunction<
        T,
        {
          // Decreases the speed by a percentage step.
          percentage_step?: number;
        }
      >;
      // Controls oscillatation of the fan.
      oscillate: ServiceFunction<
        T,
        {
          // Turn on/off oscillation.
          oscillating: boolean;
        }
      >;
      // Sets the fan rotation direction.
      setDirection: ServiceFunction<
        T,
        {
          // Direction to rotate.
          direction: "forward" | "reverse";
        }
      >;
      // Sets the fan speed.
      setPercentage: ServiceFunction<
        T,
        {
          // Speed of the fan.
          percentage: number;
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        T,
        {
          // Preset mode. @example auto
          preset_mode: string;
        }
      >;
    };
    switch: {
      // Turns a switch off.
      turnOff: ServiceFunction<T, object>;
      // Turns a switch on.
      turnOn: ServiceFunction<T, object>;
      // Toggles a switch on/off.
      toggle: ServiceFunction<T, object>;
    };
    button: {
      // Press the button entity.
      press: ServiceFunction<T, object>;
    };
    weather: {
      // Get weather forecast.
      getForecast: ServiceFunction<
        T,
        {
          // Forecast type: daily, hourly or twice daily.
          type: "daily" | "hourly" | "twice_daily";
        }
      >;
      // Get weather forecasts.
      getForecasts: ServiceFunction<
        T,
        {
          // Forecast type: daily, hourly or twice daily.
          type: "daily" | "hourly" | "twice_daily";
        }
      >;
    };
    climate: {
      // Turns climate device on.
      turnOn: ServiceFunction<T, object>;
      // Turns climate device off.
      turnOff: ServiceFunction<T, object>;
      // Toggles climate device, from on to off, or off to on.
      toggle: ServiceFunction<T, object>;
      // Sets HVAC operation mode.
      setHvacMode: ServiceFunction<
        T,
        {
          // HVAC operation mode.
          hvac_mode?:
            | "off"
            | "auto"
            | "cool"
            | "dry"
            | "fan_only"
            | "heat_cool"
            | "heat";
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        T,
        {
          // Preset mode. @example away
          preset_mode: string;
        }
      >;
      // Turns auxiliary heater on/off.
      setAuxHeat: ServiceFunction<
        T,
        {
          // New value of auxiliary heater.
          aux_heat: boolean;
        }
      >;
      // Sets target temperature.
      setTemperature: ServiceFunction<
        T,
        {
          // Target temperature.
          temperature?: number;
          // High target temperature.
          target_temp_high?: number;
          // Low target temperature.
          target_temp_low?: number;
          // HVAC operation mode.
          hvac_mode?:
            | "off"
            | "auto"
            | "cool"
            | "dry"
            | "fan_only"
            | "heat_cool"
            | "heat";
        }
      >;
      // Sets target humidity.
      setHumidity: ServiceFunction<
        T,
        {
          // Target humidity.
          humidity: number;
        }
      >;
      // Sets fan operation mode.
      setFanMode: ServiceFunction<
        T,
        {
          // Fan operation mode. @example low
          fan_mode: string;
        }
      >;
      // Sets swing operation mode.
      setSwingMode: ServiceFunction<
        T,
        {
          // Swing operation mode. @example horizontal
          swing_mode: string;
        }
      >;
    };
    alarmControlPanel: {
      // Disarms the alarm.
      alarmDisarm: ServiceFunction<
        T,
        {
          // Code to disarm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, but someone is home_.
      alarmArmHome: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, no one home_.
      alarmArmAway: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for the night_.
      alarmArmNight: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for vacation_.
      alarmArmVacation: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm while allowing to bypass a custom area.
      alarmArmCustomBypass: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Enables an external alarm trigger.
      alarmTrigger: ServiceFunction<
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
    };
    alarmo: {
      //
      arm: ServiceFunction<
        T,
        {
          // undefined @example alarm_control_panel.alarm
          entity_id: string;
          // undefined @example 1234
          code?: string;
          // undefined @example away
          mode?: "away" | "night" | "home" | "vacation" | "custom";
          // undefined
          skip_delay?: boolean;
          // undefined
          force?: boolean;
        }
      >;
      //
      disarm: ServiceFunction<
        T,
        {
          // undefined @example alarm_control_panel.alarm
          entity_id: string;
          // undefined @example 1234
          code?: string;
        }
      >;
      //
      enableUser: ServiceFunction<
        T,
        {
          // undefined @example Frank
          name: string;
        }
      >;
      //
      disableUser: ServiceFunction<
        T,
        {
          // undefined @example Frank
          name: string;
        }
      >;
    };
    harmony: {
      // Syncs the remote's configuration.
      sync: ServiceFunction<T, object>;
      // Sends change channel command to the Harmony HUB.
      changeChannel: ServiceFunction<
        T,
        {
          // Channel number to change to.
          channel: number;
        }
      >;
    };
    googleAssistantSdk: {
      // Sends a command as a text query to Google Assistant.
      sendTextCommand: ServiceFunction<
        T,
        {
          // Command(s) to send to Google Assistant. @example turn off kitchen TV
          command?: string;
          // Name(s) of media player entities to play response on. @example media_player.living_room_speaker
          media_player?: string;
        }
      >;
    };
    spotcast: {
      // Starts spotify playback on chromecast devices
      start: ServiceFunction<
        T,
        {
          // The friendly name of the chromecast or spotify connect device. First checks spotify device list for name (not used together with entity_id and spotify_device_id). @example Livingroom
          device_name?: string;
          // Advanced users only. The spotify device id (not used together with entity_id or device_name). @example 4363634563457346xcyvydgf3qwa
          spotify_device_id?: string;
          // The entity_id of the chromecast mediaplayer. Friendly name MUST match the spotify connect device name (not used together with device_name and spotify_device_id). @example media_player.vardagsrum
          entity_id?: string;
          // Supported Spotify URI as string. None or empty uri will transfer the current/last playback (see parameter force_playback). @example spotify:playlist:37i9dQZF1DX3yvAYDslnv8
          uri?: string;
          // A category to fetch playlist from. See https://developer.spotify.com/console/get-browse-categories/ for a list of categories
          category?: string;
          // Country code to use with category. See https://spotipy.readthedocs.io/en/2.19.0/#spotipy.client.Spotify.country_codes for list of available codes
          country?: string;
          // Limit of playlist to fetch in a given category. Default 20
          limit?: number;
          // A Search request to the spotify API. Will play the most relevant search result.
          search?: string;
          // Optionally starts Spotify using an alternative account specified in config. @example my_wifes
          account?: string;
          // In case of transfering playback: If true starts playing the user's last playback even if nothing is currently playing. @example true
          force_playback?: boolean;
          // Starts the playback at a random position in the playlist or album. @example true
          random_song?: boolean;
          // Set repeat mode for playback. @example track
          repeat?: "track" | "context" | "off";
          // Set shuffle mode for playback. @example true
          shuffle?: boolean;
          // Set offset mode for playback. 0 is the first song. @example 1
          offset?: number;
          // Set the volume for playback in percentage. @example 50
          start_volume?: number;
          // Set to ignore or not already played episodes in a podcast playlist @example true
          ignore_fully_played?: boolean;
        }
      >;
    };
    zha: {
      // Allows nodes to join the Zigbee network.
      permit: ServiceFunction<
        T,
        {
          // Time to permit joins.
          duration?: number;
          // IEEE address of the node permitting new joins. @example 00:0d:6f:00:05:7d:2d:34
          ieee?: string;
          // IEEE address of the joining device (must be used with the install code). @example 00:0a:bf:00:01:10:23:35
          source_ieee?: string;
          // Install code of the joining device (must be used with the source_ieee). @example 1234-5678-1234-5678-AABB-CCDD-AABB-CCDD-EEFF
          install_code?: string;
          // Value of the QR install code (different between vendors). @example Z:000D6FFFFED4163B$I:52797BF4A5084DAA8E1712B61741CA024051
          qr_code?: string;
        }
      >;
      // Removes a node from the Zigbee network.
      remove: ServiceFunction<
        T,
        {
          // IEEE address of the node to remove. @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
        }
      >;
      // Sets an attribute value for the specified cluster on the specified entity.
      setZigbeeClusterAttribute: ServiceFunction<
        T,
        {
          // IEEE address for the device. @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          // Endpoint ID for the cluster.
          endpoint_id: number;
          // ZCL cluster to retrieve attributes for.
          cluster_id: number;
          // Type of the cluster.
          cluster_type?: "in" | "out";
          // ID of the attribute to set.
          attribute: number;
          // Value to write to the attribute. @example 1
          value: string;
          // Manufacturer code. Use a value of '-1' to force no code to be set. @example 252
          manufacturer?: string;
        }
      >;
      // Issues a command on the specified cluster on the specified entity.
      issueZigbeeClusterCommand: ServiceFunction<
        T,
        {
          // IEEE address for the device. @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          // Endpoint ID for the cluster.
          endpoint_id: number;
          // ZCL cluster to retrieve attributes for.
          cluster_id: number;
          // Type of the cluster.
          cluster_type?: "in" | "out";
          // ID of the command to execute.
          command: number;
          // Type of the command to execute.
          command_type: "client" | "server";
          // Arguments to pass to the command. @example [arg1, arg2, argN]
          args?: object;
          // Parameters to pass to the command.
          params?: object;
          // Manufacturer code. Use a value of '-1' to force no code to be set. @example 252
          manufacturer?: string;
        }
      >;
      // Issue command on the specified cluster on the specified group.
      issueZigbeeGroupCommand: ServiceFunction<
        T,
        {
          // Hexadecimal address of the group. @example 546
          group: string;
          // ZCL cluster to send command to.
          cluster_id: number;
          // Type of the cluster.
          cluster_type?: "in" | "out";
          // ID of the command to execute.
          command: number;
          // Arguments to pass to the command. @example [arg1, arg2, argN]
          args?: object;
          // Manufacturer code. Use a value of '-1' to force no code to be set. @example 252
          manufacturer?: string;
        }
      >;
      // This service uses the WD capabilities to emit a quick audible/visible pulse called a 'squawk'. The squawk command has no effect if the WD is currently active (warning in progress).
      warningDeviceSquawk: ServiceFunction<
        T,
        {
          // IEEE address for the device. @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          // The Squawk Mode field is used as a 4-bit enumeration, and can have one of the values shown in Table 8-24 of the ZCL spec - Squawk Mode Field. The exact operation of each mode (how the WD “squawks”) is implementation specific.
          mode?: number;
          // The strobe field is used as a Boolean, and determines if the visual indication is also required in addition to the audible squawk, as shown in Table 8-25 of the ZCL spec - Strobe Bit.
          strobe?: number;
          // The squawk level field is used as a 2-bit enumeration, and determines the intensity of audible squawk sound as shown in Table 8-26 of the ZCL spec - Squawk Level Field Values.
          level?: number;
        }
      >;
      // This service starts the operation of the warning device. The warning device alerts the surrounding area by audible (siren) and visual (strobe) signals.
      warningDeviceWarn: ServiceFunction<
        T,
        {
          // IEEE address for the device. @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          // The Warning Mode field is used as a 4-bit enumeration, can have one of the values 0-6 defined below in table 8-20 of the ZCL spec. The exact behavior of the warning device in each mode is according to the relevant security standards.
          mode?: number;
          // The Strobe field is used as a 2-bit enumeration, and determines if the visual indication is required in addition to the audible siren, as indicated in Table 8-21 of the ZCL spec. '0' means no strobe, '1' means strobe. If the strobe field is “1” and the Warning Mode is “0” (“Stop”), then only the strobe is activated.
          strobe?: number;
          // The Siren Level field is used as a 2-bit enumeration, and indicates the intensity of audible squawk sound as shown in Table 8-22 of the ZCL spec.
          level?: number;
          // Requested duration of warning, in seconds (16 bit). If both Strobe and Warning Mode are '0' this field is ignored.
          duration?: number;
          // Indicates the length of the flash cycle. This allows you to vary the flash duration for different alarm types (e.g., fire, police, burglar). The valid range is 0-100 in increments of 10. All other values must be rounded to the nearest valid value. Strobe calculates a duty cycle over a duration of one second. The ON state must precede the OFF state. For example, if the Strobe Duty Cycle field specifies “40,”, then the strobe flashes ON for 4/10ths of a second and then turns OFF for 6/10ths of a second.
          duty_cycle?: number;
          // Indicates the intensity of the strobe as shown in Table 8-23 of the ZCL spec. This attribute is designed to vary the output of the strobe (i.e., brightness) and not its frequency, which is detailed in section 8.4.2.3.1.6 of the ZCL spec.
          intensity?: number;
        }
      >;
      // Sets a user code on a lock.
      setLockUserCode: ServiceFunction<
        T,
        {
          // Code slot to set the code in. @example 1
          code_slot: string;
          // Code to set. @example 1234
          user_code: string;
        }
      >;
      // Enables a user code on a lock.
      enableLockUserCode: ServiceFunction<
        T,
        {
          // Code slot to enable. @example 1
          code_slot: string;
        }
      >;
      // Disables a user code on a lock.
      disableLockUserCode: ServiceFunction<
        T,
        {
          // Code slot to disable. @example 1
          code_slot: string;
        }
      >;
      // Clears a user code from a lock.
      clearLockUserCode: ServiceFunction<
        T,
        {
          // Code slot to clear code from. @example 1
          code_slot: string;
        }
      >;
    };
    lock: {
      // Unlocks a lock.
      unlock: ServiceFunction<
        T,
        {
          // Code used to unlock the lock. @example 1234
          code?: string;
        }
      >;
      // Locks a lock.
      lock: ServiceFunction<
        T,
        {
          // Code used to lock the lock. @example 1234
          code?: string;
        }
      >;
      // Opens a lock.
      open: ServiceFunction<
        T,
        {
          // Code used to open the lock. @example 1234
          code?: string;
        }
      >;
    };
    siren: {
      // Turns the siren on.
      turnOn: ServiceFunction<
        T,
        {
          // The tone to emit. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration. @example fire
          tone?: string;
          // The volume. 0 is inaudible, 1 is the maximum volume. Must be supported by the integration. @example 0.5
          volume_level?: number;
          // Number of seconds the sound is played. Must be supported by the integration. @example 15
          duration?: string;
        }
      >;
      // Turns the siren off.
      turnOff: ServiceFunction<T, object>;
      // Toggles the siren on/off.
      toggle: ServiceFunction<T, object>;
    };
    automation: {
      // Triggers the actions of an automation.
      trigger: ServiceFunction<
        T,
        {
          // Defines whether or not the conditions will be skipped.
          skip_condition?: boolean;
        }
      >;
      // Toggles (enable / disable) an automation.
      toggle: ServiceFunction<T, object>;
      // Enables an automation.
      turnOn: ServiceFunction<T, object>;
      // Disables an automation.
      turnOff: ServiceFunction<
        T,
        {
          // Stops currently running actions.
          stop_actions?: boolean;
        }
      >;
      // Reloads the automation configuration.
      reload: ServiceFunction<T, object>;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | "person.peter_eldred"
      | "person.fat_tony"
      | "update.home_assistant_supervisor_update"
      | "update.home_assistant_core_update"
      | "update.studio_code_server_update"
      | "update.nginx_proxy_manager_update"
      | "update.mariadb_update"
      | "update.terminal_ssh_update"
      | "update.mosquitto_broker_update"
      | "update.uptime_kuma_update"
      | "update.esphome_update"
      | "update.home_assistant_google_drive_backup_update"
      | "update.music_assistant_beta_update"
      | "update.home_assistant_operating_system_update"
      | "light.stairs_lights"
      | "script.matrix_icon_show_and_hide_bell"
      | "zone.home"
      | "input_select.smart_speakers"
      | "timer.upstairs_motion_timeout"
      | "input_boolean.matrix_security_alerts"
      | "scene.evening_stairs_lights"
      | "scene.daytime_stairs_lights"
      | "binary_sensor.daytime"
      | "binary_sensor.overnight"
      | "sensor.studio_brightness_percent"
      | "sensor.studio_brightness_byte"
      | "cover.garagedoor"
      | "conversation.home_assistant"
      | "sun.sun"
      | "sensor.sun_next_dawn"
      | "sensor.sun_next_dusk"
      | "sensor.sun_next_midnight"
      | "sensor.sun_next_noon"
      | "sensor.sun_next_rising"
      | "sensor.sun_next_setting"
      | "number.top_stair_candle_light_timer"
      | "select.top_stair_candle_light_scene"
      | "light.top_stair_candle_light"
      | "sensor.time"
      | "sensor.date"
      | "light.entry_lamp"
      | "light.living_room_lamp"
      | "light.christmas_tree_switch"
      | "light.ivy_lights"
      | "light.snowflakes"
      | "binary_sensor.tablet_is_charging"
      | "device_tracker.ha_control_tablet"
      | "sensor.tablet_battery_temperature"
      | "sensor.tablet_battery_state"
      | "sensor.tablet_charger_type"
      | "sensor.tablet_battery_level"
      | "sensor.tablet_battery_health"
      | "sensor.tablet_battery_power"
      | "binary_sensor.kayleys_phone_is_charging"
      | "device_tracker.kayleys_phone"
      | "sensor.kayleys_phone_battery_level"
      | "sensor.kayleys_phone_battery_state"
      | "sensor.kayleys_phone_charger_type"
      | "sensor.kayleys_phone_battery_health"
      | "sensor.kayleys_phone_battery_temperature"
      | "sensor.kayleys_phone_battery_power"
      | "binary_sensor.pete_s_phone_is_charging"
      | "device_tracker.pete_s_phone"
      | "sensor.pete_s_phone_battery_level"
      | "sensor.pete_s_phone_battery_state"
      | "sensor.pete_s_phone_charger_type"
      | "sensor.pete_s_phone_battery_health"
      | "sensor.pete_s_phone_battery_temperature"
      | "sensor.pete_s_phone_battery_power"
      | "device_tracker.pete_s_oppo_find_x3_pro"
      | "sensor.pete_s_oppo_find_x3_pro_battery_level"
      | "sensor.pete_s_oppo_find_x3_pro_battery_state"
      | "sensor.pete_s_oppo_find_x3_pro_charger_type"
      | "device_tracker.pete_s_galaxy_watch"
      | "sensor.pete_s_galaxy_watch_battery_level"
      | "sensor.pete_s_galaxy_watch_battery_state"
      | "sensor.pete_s_galaxy_watch_charger_type"
      | "number.entry_lamp_timer_2"
      | "select.entry_lamp_power_on_state"
      | "number.middle_stair_candle_light_timer"
      | "select.middle_stair_candle_light_scene"
      | "light.middle_stair_candle_light"
      | "media_player.shield_2"
      | "media_player.bed_speaker_pair"
      | "media_player.kitchen_display_2"
      | "media_player.living_room_speaker_2"
      | "media_player.downstairs_speakers"
      | "media_player.kitchen_speakers_2"
      | "media_player.bathroom_speaker_2"
      | "media_player.all_speakers_2"
      | "media_player.upstairs_speakers"
      | "media_player.spare_room_speaker_2"
      | "media_player.girls_room_speaker_2"
      | "media_player.kayleys_bed_speaker"
      | "sensor.upstairs_tablet_browser_path"
      | "sensor.upstairs_tablet_browser_visibility"
      | "sensor.upstairs_tablet_browser_useragent"
      | "sensor.upstairs_tablet_browser_user"
      | "binary_sensor.upstairs_tablet_browser_fullykiosk"
      | "sensor.upstairs_tablet_browser_width"
      | "sensor.upstairs_tablet_browser_height"
      | "binary_sensor.upstairs_tablet_browser_dark_mode"
      | "binary_sensor.upstairs_tablet"
      | "light.upstairs_tablet_screen"
      | "media_player.upstairs_tablet"
      | "fan.bedroom_fan_switch"
      | "switch.entry_lamp"
      | "media_player.spare_room_speaker"
      | "media_player.shield"
      | "media_player.living_room_speaker"
      | "media_player.downstairs_speakers_2"
      | "media_player.kitchen_speakers"
      | "media_player.bathroom_speaker"
      | "media_player.all_speakers"
      | "media_player.girls_room_speaker"
      | "media_player.upstairs_speakers_2"
      | "media_player.bed_speaker_pair_2"
      | "media_player.kitchen_display"
      | "media_player.bedroom_tv"
      | "button.synchronize_devices"
      | "cover.garage_bot"
      | "binary_sensor.alarm_system_garage_pir_sensor"
      | "binary_sensor.alarm_system_entry_pir_sensor"
      | "binary_sensor.alarm_system_living_room_pir_sensor"
      | "binary_sensor.alarm_system_upstairs_room_pir_sensor"
      | "sensor.veggie_patch_raspberry_soil_moisture_voltage"
      | "sensor.veggie_patch_raspberry_soil_moisture"
      | "sensor.veggie_patch_tomato_soil_moisture_voltage"
      | "sensor.veggie_patch_tomato_soil_moisture"
      | "sensor.living_room_lamp_current_consumption"
      | "sensor.living_room_lamp_total_consumption"
      | "sensor.living_room_lamp_today_s_consumption"
      | "sensor.living_room_lamp_voltage"
      | "sensor.living_room_lamp_current"
      | "switch.living_room_lamp"
      | "switch.living_room_lamp_led"
      | "sensor.openweathermap_weather"
      | "sensor.openweathermap_dew_point"
      | "sensor.openweathermap_temperature"
      | "sensor.openweathermap_feels_like_temperature"
      | "sensor.openweathermap_wind_speed"
      | "sensor.openweathermap_wind_bearing"
      | "sensor.openweathermap_humidity"
      | "sensor.openweathermap_pressure"
      | "sensor.openweathermap_cloud_coverage"
      | "sensor.openweathermap_rain"
      | "sensor.openweathermap_snow"
      | "sensor.openweathermap_precipitation_kind"
      | "sensor.openweathermap_uv_index"
      | "sensor.openweathermapdaily_visibility"
      | "sensor.openweathermap_condition"
      | "sensor.openweathermap_weather_code"
      | "sensor.openweathermap_forecast_condition"
      | "sensor.openweathermap_forecast_precipitation"
      | "sensor.openweathermap_forecast_precipitation_probability"
      | "sensor.openweathermap_forecast_pressure"
      | "sensor.openweathermap_forecast_temperature"
      | "sensor.openweathermap_forecast_temperature_low"
      | "sensor.openweathermap_forecast_time"
      | "sensor.openweathermap_forecast_wind_bearing"
      | "sensor.openweathermap_forecast_wind_speed"
      | "sensor.openweathermap_forecast_cloud_coverage"
      | "weather.openweathermap"
      | "binary_sensor.uptimekuma_peteflix"
      | "sensor.uptimekuma_peteflix"
      | "sensor.uptimekuma_192_168_0_181"
      | "binary_sensor.rt_ax86u_ee90_wan_status"
      | "sensor.rt_ax86u_ee90_b_received"
      | "sensor.rt_ax86u_ee90_b_sent"
      | "sensor.rt_ax86u_ee90_packets_received"
      | "sensor.rt_ax86u_ee90_packets_sent"
      | "sensor.rt_ax86u_ee90_external_ip"
      | "sensor.rt_ax86u_ee90_wan_status"
      | "sensor.rt_ax86u_ee90_kib_s_received"
      | "sensor.rt_ax86u_ee90_kib_s_sent"
      | "sensor.rt_ax86u_ee90_packets_s_received"
      | "sensor.rt_ax86u_ee90_packets_s_sent"
      | "button.studio_matrix_restart"
      | "light.studio_matrix_main"
      | "light.studio_matrix"
      | "number.studio_matrix_speed"
      | "number.studio_matrix_intensity"
      | "select.studio_matrix_live_override"
      | "select.studio_matrix_playlist"
      | "select.studio_matrix_preset"
      | "select.studio_matrix_color_palette"
      | "sensor.studio_matrix_led_count"
      | "sensor.studio_matrix_ip"
      | "switch.studio_matrix_nightlight"
      | "switch.studio_matrix_sync_send"
      | "switch.studio_matrix_sync_receive"
      | "switch.studio_matrix_reverse"
      | "update.studio_matrix_firmware"
      | "sensor.hacs"
      | "weather.chevron_seven"
      | "alarm_control_panel.alarmo"
      | "update.alarm_system_firmware"
      | "media_player.spotify_madeleine_eldred"
      | "media_player.spotify_peter_eldred"
      | "media_player.spotify_emily_eldred"
      | "sensor.peteflix_cpu_usage"
      | "sensor.peteflix_network_0_speed"
      | "sensor.peteflix_memory_usage"
      | "sensor.peteflix_network_0_bytes_sent"
      | "sensor.peteflix_memory_available"
      | "sensor.peteflix_network_0_bytes_received"
      | "sensor.peteflix_memory_used"
      | "sensor.peteflix_network_0_bps_sent"
      | "sensor.peteflix_memory_total"
      | "sensor.peteflix_network_0_bps_received"
      | "sensor.peteflix_battery_level"
      | "sensor.peteflix_storage_c_total_storage"
      | "sensor.peteflix_battery_full_lifetime"
      | "sensor.peteflix_storage_c_available_free_space"
      | "sensor.peteflix_battery_remaining_time"
      | "sensor.peteflix_storage_c_total_free_space"
      | "sensor.peteflix_battery_remaining"
      | "sensor.peteflix_storage_c_used_space"
      | "sensor.peteflix_network_0_ipv4"
      | "sensor.peteflix_storage_c_format"
      | "sensor.peteflix_network_0_ipv6"
      | "sensor.peteflix_storage_c_usage"
      | "sensor.peteflix_storage_c_label"
      | "sensor.peteflix_storage_e_total_storage"
      | "sensor.peteflix_storage_e_available_free_space"
      | "sensor.peteflix_storage_e_total_free_space"
      | "sensor.peteflix_storage_e_used_space"
      | "sensor.peteflix_storage_e_format"
      | "sensor.peteflix_storage_e_usage"
      | "sensor.peteflix_storage_e_label"
      | "sensor.peteflix_storage_t_total_storage"
      | "sensor.peteflix_storage_t_available_free_space"
      | "sensor.peteflix_storage_t_total_free_space"
      | "sensor.peteflix_storage_t_used_space"
      | "sensor.peteflix_storage_t_format"
      | "sensor.peteflix_storage_t_usage"
      | "sensor.peteflix_storage_t_label"
      | "sensor.peteflix_storage_u_total_storage"
      | "sensor.peteflix_storage_u_available_free_space"
      | "sensor.peteflix_storage_u_total_free_space"
      | "sensor.peteflix_storage_u_used_space"
      | "sensor.peteflix_storage_u_format"
      | "sensor.peteflix_storage_u_usage"
      | "sensor.peteflix_storage_u_label"
      | "sensor.peteflix_storage_v_total_storage"
      | "sensor.peteflix_storage_v_available_free_space"
      | "sensor.peteflix_storage_v_total_free_space"
      | "sensor.peteflix_storage_v_used_space"
      | "sensor.peteflix_storage_v_format"
      | "sensor.peteflix_storage_v_usage"
      | "sensor.peteflix_storage_v_label"
      | "sensor.peteflix_storage_w_total_storage"
      | "sensor.peteflix_storage_w_available_free_space"
      | "remote.logitech_harmony"
      | "select.logitech_harmony_activities"
      | "switch.logitech_harmony_nintendo_switch"
      | "switch.logitech_harmony_shield_tv"
      | "sensor.peteflix_storage_w_total_free_space"
      | "sensor.peteflix_storage_w_used_space"
      | "sensor.peteflix_storage_w_format"
      | "sensor.peteflix_storage_w_usage"
      | "sensor.peteflix_storage_w_label"
      | "sensor.peteflix_current_username"
      | "sensor.peteflix_system_boot_time"
      | "sensor.peteflix_system_uptime"
      | "sensor.peteflix_system_idle_time"
      | "sensor.peteflix_screen_0_width"
      | "sensor.peteflix_screen_0_height"
      | "sensor.peteflix_harddrive_peteflix_storage_d_total_storage"
      | "sensor.peteflix_harddrive_peteflix_storage_d_available_free_space"
      | "sensor.peteflix_harddrive_peteflix_storage_d_total_free_space"
      | "sensor.peteflix_harddrive_peteflix_storage_d_used_space"
      | "sensor.peteflix_harddrive_peteflix_storage_d_format"
      | "sensor.peteflix_harddrive_peteflix_storage_d_usage"
      | "sensor.peteflix_harddrive_peteflix_storage_d_label"
      | "sensor.peteflix_harddrive_peteflix_storage_s_total_storage"
      | "sensor.peteflix_harddrive_peteflix_storage_s_available_free_space"
      | "sensor.peteflix_harddrive_peteflix_storage_s_total_free_space"
      | "sensor.peteflix_harddrive_peteflix_storage_s_used_space"
      | "sensor.peteflix_harddrive_peteflix_storage_s_format"
      | "sensor.peteflix_harddrive_peteflix_storage_s_usage"
      | "sensor.peteflix_harddrive_peteflix_storage_s_label"
      | "binary_sensor.peteflix_power_status"
      | "camera.peteflix_screen_0"
      | "binary_sensor.peteflix_battery_status"
      | "binary_sensor.peteflix_network_0_wired"
      | "media_player.spotify_kayley_laura"
      | "switch.sonoff_doorbell_chime"
      | "switch.peteflix_power_switch"
      | "switch.sonoff_ivy_lights"
      | "switch.sonoff_snowflakes"
      | "number.sonoff_doorbell_chime_pulsewidth"
      | "camera.front_doorbell"
      | "binary_sensor.lumi_studio_motion_sensor_occupancy"
      | "binary_sensor.lumi_studio_motion_sensor_movement"
      | "button.lumi_girls_room_identify"
      | "button.tv_power_switch_identifybutton"
      | "button.lumi_bedroom_identify"
      | "button.lumi_living_room_identify"
      | "button.lumi_outside_identify"
      | "button.lumi_studio_identify"
      | "button.bedtime_switch_identifybutton"
      | "button.lumi_studio_motion_sensor_identify"
      | "button.christmas_tree_identify"
      | "button.bedroom_fan_identify"
      | "button.bobcorexy_main_power_identify"
      | "button.spare_room_climate_sensor_identify"
      | "button.upstairs_climate_sensor_identify"
      | "number.lumi_studio_motion_sensor_detection_interval"
      | "select.lumi_studio_motion_sensor_sensitivity"
      | "select.christmas_tree_power_on_state"
      | "select.christmas_tree_backlight_mode"
      | "select.bedroom_fan_power_on_state"
      | "select.bedroom_fan_backlight_mode"
      | "select.bobcorexy_main_power_power_on_state"
      | "select.bobcorexy_main_power_backlight_mode"
      | "sensor.lumi_girls_room_battery"
      | "sensor.lumi_girls_room_pressure"
      | "sensor.lumi_girls_room_temperature"
      | "sensor.lumi_girls_room_humidity"
      | "sensor.tv_power_switch_battery"
      | "sensor.lumi_bedroom_battery"
      | "sensor.lumi_bedroom_pressure"
      | "sensor.lumi_bedroom_temperature"
      | "sensor.lumi_bedroom_humidity"
      | "sensor.lumi_living_room_battery"
      | "sensor.lumi_living_room_pressure"
      | "sensor.lumi_living_room_temperature"
      | "sensor.lumi_living_room_humidity"
      | "sensor.lumi_outside_battery"
      | "sensor.lumi_outside_pressure"
      | "sensor.lumi_outside_temperature"
      | "sensor.lumi_outside_humidity"
      | "sensor.lumi_studio_battery"
      | "sensor.lumi_studio_pressure"
      | "sensor.lumi_studio_temperature"
      | "sensor.lumi_studio_humidity"
      | "sensor.bedtime_switch_battery"
      | "sensor.lumi_studio_motion_sensor_battery"
      | "sensor.lumi_studio_motion_sensor_illuminance"
      | "sensor.living_room_air_quality_sensor_temperature"
      | "sensor.living_room_air_quality_sensor_carbon_dioxide_concentration"
      | "sensor.living_room_air_quality_sensor_formaldehyde_concentration"
      | "sensor.living_room_air_quality_sensor_humidity"
      | "sensor.living_room_air_quality_sensor_voc_level"
      | "sensor.christmas_tree_rms_current"
      | "sensor.christmas_tree_rms_voltage"
      | "sensor.christmas_tree_active_power"
      | "sensor.christmas_tree_summation_delivered"
      | "sensor.girls_room_scene_switch_battery"
      | "sensor.girls_room_scene_switch_battery_2"
      | "sensor.girls_room_scene_switch_battery_3"
      | "sensor.girls_room_scene_switch_battery_4"
      | "sensor.bedroom_fan_current"
      | "sensor.bedroom_fan_voltage"
      | "sensor.bedroom_fan_power"
      | "sensor.bedroom_fan_summation_delivered"
      | "sensor.bobcorexy_main_power_current"
      | "sensor.bobcorexy_main_power_voltage"
      | "sensor.bobcorexy_main_power_power"
      | "sensor.bobcorexy_main_power_summation_delivered"
      | "sensor.spare_room_climate_sensor_battery"
      | "sensor.lumi_spare_room_pressure"
      | "sensor.lumi_spare_room_temperature"
      | "sensor.lumi_spare_room_humidity"
      | "sensor.upstairs_climate_sensor_battery"
      | "sensor.lumi_upstairs_pressure"
      | "sensor.lumi_upstairs_temperature"
      | "sensor.lumi_upstairs_humidity"
      | "switch.lumi_studio_motion_sensor_led_trigger_indicator"
      | "switch.christmas_tree_switch"
      | "switch.christmas_tree_child_lock"
      | "switch.bedroom_fan_switch"
      | "switch.bedroom_fan_child_lock"
      | "switch.bobcorexy_main_power_switch"
      | "switch.bobcorexy_main_power_child_lock"
      | "update.tv_power_switch_firmware"
      | "update.bedtime_switch_firmware"
      | "update.studio_motion_sensor_firmware"
      | "update.living_room_air_quality_sensor_firmware"
      | "update.christmas_tree_firmware"
      | "update.girls_room_scene_switch_firmware"
      | "update.bedroom_fan_firmware"
      | "update.bobcorexy_main_power_firmware"
      | "automation.turn_on_the_living_room_tv"
      | "automation.turn_off_the_living_room_tv"
      | "automation.activate_evening_stairs_lights"
      | "automation.activate_daytime_stairs_lights"
      | "automation.wake_up_upstairs_dashboard"
      | "automation.update_upstairs_dashboard_brightness"
      | "automation.repeat_wake_upstairs_dashboard"
      | "automation.girls_room_scene_switch_button_1_short_press"
      | "automation.girls_room"
      | "automation.girls_room_scene_switch_button_2_short_press"
      | "automation.girls_room_scene_switch_button_2_long_press"
      | "automation.new_automation"
      | "automation.studio_matrix_security_alert"
      | "automation.doorbell"
      | "binary_sensor.updater"
      | "media_player.emby_hal"
      | "media_player.emby_android_tv"
      | "media_player.emby_bedroom_tv"
      | "media_player.emby_hat4kdtv"
      | "input_select.chromecast_audio"
      | "automation.spotify_device_selected"
      | "media_player.emby_nexus_player"
      | "media_player.emby_apple_tv"
      | "media_player.emby_front_room_tv"
      | "media_player.emby_chromecast"
      | "media_player.emby_firefox"
      | "media_player.emby_back_room_tv"
      | "media_player.emby_oppo_find_x3_pro"
      | "media_player.emby_dans_6"
      | "script.spotify_start"
      | "media_player.emby_pete_spectrex36"
      | "media_player.emby_pete_spectrex36_2"
      | "media_player.emby_google_chrome_windows"
      | "media_player.emby_google_chrome_windows_2"
      | "media_player.emby_galaxy_s20_5g"
      | "media_player.emby_apple_tv_2"
      | "media_player.emby_front_living_room_tv"
      | "media_player.emby_chromecast_2"
      | "media_player.emby_chromecast_3"
      | "media_player.emby_chromecast_4"
      | "media_player.emby_chromecast_5"
      | "media_player.emby_chromecast_6"
      | "media_player.emby_chromecast_7"
      | "media_player.emby_chromecast_8"
      | "media_player.emby_chromecast_9"
      | "media_player.emby_chromecast_10"
      | "media_player.emby_chromecast_11"
      | "media_player.emby_chromecast_12"
      | "media_player.emby_play_room_tv"
      | "media_player.emby_chrome_android"
      | "media_player.emby_chromecast_13"
      | "media_player.emby_chromecast_14"
      | "media_player.emby_iphone"
      | "media_player.emby_chrome_windows_2"
      | "media_player.emby_sarah_s_phone"
      | "media_player.emby_sk_tv"
      | "media_player.emby_chromecast_15"
      | "media_player.emby_chromecast_16"
      | "media_player.emby_chromecast_17"
      | "media_player.emby_chromecast_18"
      | "media_player.emby_chromecast_19"
      | "media_player.emby_chromecast_20"
      | "media_player.emby_chromecast_21"
      | "media_player.emby_chromecast_22"
      | "media_player.emby_shield"
      | "media_player.emby_chromecast_23"
      | "media_player.emby_chromecast_24"
      | "media_player.emby_chromecast_25"
      | "media_player.emby_djpoidaz_oppo_find_x3_pro"
      | "binary_sensor.early_morning"
      | "binary_sensor.late_morning"
      | "media_player.emby_chromecast_26"
      | "media_player.emby_chromecast_27"
      | "media_player.emby_emily_s_tablet"
      | "media_player.emby_madeleine_s_tablet"
      | "media_player.emby_chromecast_28"
      | "media_player.emby_chromecast_29"
      | "media_player.emby_chromecast_30"
      | "media_player.emby_chromecast_31"
      | "media_player.emby_chromecast_32"
      | "media_player.emby_chromecast_33"
      | "media_player.emby_chrome"
      | "media_player.emby_iphone_2"
      | "media_player.emby_chromecast_34"
      | "media_player.emby_chromecast_35"
      | "media_player.emby_google_chrome_windows_3"
      | "media_player.emby_chromecast_36"
      | "media_player.emby_chromecast_37"
      | "media_player.emby_chromecast_38"
      | "media_player.emby_apple_tv_3"
      | "update.veggie_patch_firmware"
      | "media_player.emby_chromecast_39"
      | "media_player.emby_chromecast_40"
      | "media_player.emby_chromecast_41"
      | "sensor.christmas_tree_power_factor"
      | "media_player.emby_chromecast_42"
      | "media_player.emby_chrome_2"
      | "media_player.emby_pixel_7"
      | "media_player.emby_eldroidz2"
      | "media_player.emby_eldroidz2_2"
      | "media_player.emby_brendoz_lappy2"
      | "media_player.emby_galaxy_tab_a_2017"
      | "media_player.emby_galaxy_tab_a_2017_2"
      | "media_player.upstairs_tv"
      | "media_player.kitchen_display_1"
      | "sensor.studio_matrix_estimated_current"
      | "sensor.studio_matrix_max_current"
      | "light.studio_matrix_segment_1"
      | "number.studio_matrix_segment_1_speed"
      | "number.studio_matrix_segment_1_intensity"
      | "select.studio_matrix_segment_1_color_palette"
      | "switch.studio_matrix_segment_1_reverse"
      | "media_player.emby_chromecast_43"
      | "media_player.petes_bed_speaker"
      | "binary_sensor.backups_stale"
      | "sensor.backup_state";
  }
}
