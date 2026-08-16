---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag14165" onclick="CopyToClipboard('tag14165');return false;" class="tag-decoration">nightly</div><div id="tag12677" onclick="CopyToClipboard('tag12677');return false;" class="tag-decoration">nightly-bec061c</div><div id="tag14964" onclick="CopyToClipboard('tag14964');return false;" class="tag-decoration">nightly-2e99fd6fd08188820419cf9f077a34a116306246</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/bec061c15495b4d729a1b883f29ce5cf80565102" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31952411565" target="_blank">2026-08-16 14:20:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3062" onclick="CopyToClipboard('tag3062');return false;" class="tag-decoration">release</div><div id="tag887" onclick="CopyToClipboard('tag887');return false;" class="tag-decoration">release-de50765</div><div id="tag27039" onclick="CopyToClipboard('tag27039');return false;" class="tag-decoration">release-5.1.0</div><div id="tag6309" onclick="CopyToClipboard('tag6309');return false;" class="tag-decoration">release-v5</div><div id="tag26336" onclick="CopyToClipboard('tag26336');return false;" class="tag-decoration">release-v5.1</div><div id="tag12798" onclick="CopyToClipboard('tag12798');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/de507655f8c676f2c0bfc110f324037a2a99afc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874466766" target="_blank">2026-08-15 08:25:56</a></td></tr>
<tr><td><div id="tag30516" onclick="CopyToClipboard('tag30516');return false;" class="tag-decoration">testing</div><div id="tag5716" onclick="CopyToClipboard('tag5716');return false;" class="tag-decoration">testing-988e600</div><div id="tag10505" onclick="CopyToClipboard('tag10505');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag14318" onclick="CopyToClipboard('tag14318');return false;" class="tag-decoration">testing-v5</div><div id="tag16879" onclick="CopyToClipboard('tag16879');return false;" class="tag-decoration">testing-v5.1</div><div id="tag3948" onclick="CopyToClipboard('tag3948');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/988e600c7c2092950f2ede0e6d23c316dbadd8bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874465855" target="_blank">2026-08-15 08:25:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
