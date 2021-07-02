var visibleSocialIcons = {};
visibleSocialIcons.facebookURLVisible = true;
visibleSocialIcons.googlePlusURLVisible = true;
visibleSocialIcons.instagramURLVisible = true;
visibleSocialIcons.linkedinURLVisible = true;
visibleSocialIcons.twitterURLVisible = true;
visibleSocialIcons.yelpURLVisible = true;
visibleSocialIcons.youTubeURLVisible = true;

unlayer.registerTool({
    name: 'social',
    label: 'Social',
    icon: 'fa-share-alt',
    supportedDisplayModes: ['web', 'email'],
    options: {
        default: {
            title: null,
        },
        background: {
            title: 'SOCIAL',
            position: 1,
            options: {
                BGColor: {
                    label: 'Background Color',
                    defaultValue: 'rgba(0,0,0,0)',
                    widget: 'color_picker',
                },
                BGPadding: {
                    label: 'Background Padding',
                    defaultValue: 15,
                    widget: 'counter',
                },
                iconSpacing: {
                    label: 'Spacing between Icons',
                    defaultValue: 15,
                    widget: 'counter',
                },
                iconSize: {
                    label: 'Icon Size',
                    defaultValue: 25,
                    widget: 'counter',
                },
            },
        },
    },
    values: {},
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                visibleSocialIcons = values.data.visibleSocialIcons;
                return generateSocialHTML(values);
            },
        }),
        exporters: {
            web: function(values) {
                visibleSocialIcons = values.data.visibleSocialIcons;
            return generateSocialHTML(values);
            },
            email: function(values) {
                visibleSocialIcons = values.data.visibleSocialIcons;
              return generateSocialHTML(values);
            },
        },
        head: {
            css: function(values) {},
            js: function(values) {},
        },
    },
});


function generateSocialHTML(v) {
    visibleSocialIcons = v.data.visibleSocialIcons;
    let facebookURLDiv = ``;
    let googlePlusURLDiv = ``;
    let yelpURLDiv = ``;
    let instagramURLDiv = ``;
    let linkedinURLDiv = ``;
    let twitterURLDiv = ``;
    let youTubeURLDiv = ``;

    let fbIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsF1o9DEZWHgkFfBqUASNbUeOb1G5D4FvS1g&usqp=CAU";

    let googleIcon = "https://www.searchpng.com/wp-content/uploads/2018/11/google_icon_2048-715x715.png";

    let yelpIcon = "https://image.flaticon.com/icons/png/512/168/168812.png";

    let instagramIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png";

    let linkedInIcon = "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png";

    let twitterIcon = "https://image.flaticon.com/icons/png/512/124/124021.png";

    let youtubeIcon = "https://termnet.eu/wp-content/uploads/2019/03/youtube-1495277_640.png";

    if (v.data.visibleSocialIcons.facebookURLVisible) {
        facebookURLDiv = `
      <a href='{{facebookUrl}}' target='_blank' class='facebook' title='Facebook' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${fbIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.googlePlusURLVisible) {
        googlePlusURLDiv = `
      <a href='{{googleUrl}}' target='_blank' class='google' title='Google' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${googleIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.yelpURLVisible) {
        yelpURLDiv = `
      <a href='{{yelpUrl}}'  target='_blank' class='yelp' title='Yelp' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${yelpIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.instagramURLVisible) {
        instagramURLDiv = `
      <a href='{{instagramUrl}}'  target='_blank' class='instagram' title='instagram' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${instagramIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.linkedinURLVisible) {
        linkedinURLDiv = `
      <a href="{{linkedInUrl}}"  target="_blank" class="linkedin" title="LinkedIn" style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${linkedInIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.twitterURLVisible) {
        twitterURLDiv = `
      <a href='{{twitterUrl}}'  target='_blank' class='twitter' title='Twitter' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${twitterIcon}); background-position: center;'></div>
      </a>`
    }
    if (v.data.visibleSocialIcons.youTubeURLVisible) {
        youTubeURLDiv = `
      <a href='{{youTubeUrl}}'  target='_blank' class='youtube' title='Youtube' style="text-decoration: none; margin-right: ${v.iconSpacing}px;">
      <div style='background-size: contain;display: inline-block;height:${v.iconSize}px; width:${v.iconSize}px; background-repeat:no-repeat; background-image:url(${youtubeIcon}); background-position: center;'></div>
      </a>`
    }
    let boxDiv = `
      <div id="social-tool" style="background-color: ${v.BGColor}; padding: ${v.BGPadding}px; text-align: center; font-size: ${v.iconSize}px; background-color: ${v.BGColor}; padding: ${v.BGPadding}px; text-align: center; font-size: ${v.iconSize}px;">
          ${facebookURLDiv}
          ${linkedinURLDiv}
          ${twitterURLDiv}
          ${instagramURLDiv}
          ${yelpURLDiv}
          ${youTubeURLDiv}
          ${googlePlusURLDiv}
        </div>
    `;
    return boxDiv;
}
