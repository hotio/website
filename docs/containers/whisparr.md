---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29198" onclick="CopyToClipboard('tag29198');return false;" class="tag-decoration">v2</div><div id="tag17053" onclick="CopyToClipboard('tag17053');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag15127" onclick="CopyToClipboard('tag15127');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag29870" onclick="CopyToClipboard('tag29870');return false;" class="tag-decoration">v2-v2</div><div id="tag4237" onclick="CopyToClipboard('tag4237');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29870" onclick="CopyToClipboard('tag29870');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag6257" onclick="CopyToClipboard('tag6257');return false;" class="tag-decoration">v2-develop</div><div id="tag12392" onclick="CopyToClipboard('tag12392');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag6520" onclick="CopyToClipboard('tag6520');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag16671" onclick="CopyToClipboard('tag16671');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17523" onclick="CopyToClipboard('tag17523');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17164" onclick="CopyToClipboard('tag17164');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag20690" onclick="CopyToClipboard('tag20690');return false;" class="tag-decoration">v3</div><div id="tag13180" onclick="CopyToClipboard('tag13180');return false;" class="tag-decoration">v3-4cd7131</div><div id="tag31353" onclick="CopyToClipboard('tag31353');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag20323" onclick="CopyToClipboard('tag20323');return false;" class="tag-decoration">v3-v3</div><div id="tag6631" onclick="CopyToClipboard('tag6631');return false;" class="tag-decoration">v3-v3.3</div><div id="tag4677" onclick="CopyToClipboard('tag4677');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4cd7131e55cf28a24f0da07c9b226a2c176adafd" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681516891" target="_blank">2026-07-19 09:24:13</a></td></tr>
<tr><td><div id="tag28206" onclick="CopyToClipboard('tag28206');return false;" class="tag-decoration">v3-develop</div><div id="tag554" onclick="CopyToClipboard('tag554');return false;" class="tag-decoration">v3-develop-56140f0</div><div id="tag5705" onclick="CopyToClipboard('tag5705');return false;" class="tag-decoration">v3-develop-3.3.5-develop.846</div><div id="tag12205" onclick="CopyToClipboard('tag12205');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4357" onclick="CopyToClipboard('tag4357');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5640" onclick="CopyToClipboard('tag5640');return false;" class="tag-decoration">v3-develop-v3.3.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/56140f01f451eddaa4fb99bb78399edd91e53e87" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681520950" target="_blank">2026-07-19 09:24:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
