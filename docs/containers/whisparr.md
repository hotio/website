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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4834" onclick="CopyToClipboard('tag4834');return false;" class="tag-decoration">v2</div><div id="tag22642" onclick="CopyToClipboard('tag22642');return false;" class="tag-decoration">v2-465f095</div><div id="tag32403" onclick="CopyToClipboard('tag32403');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag17435" onclick="CopyToClipboard('tag17435');return false;" class="tag-decoration">v2-v2</div><div id="tag13295" onclick="CopyToClipboard('tag13295');return false;" class="tag-decoration">v2-v2.3</div><div id="tag18877" onclick="CopyToClipboard('tag18877');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465f0956b267fabf6006289908305827f559832b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493225430" target="_blank">2026-11-24 21:38:58</a></td></tr>
<tr><td><div id="tag8613" onclick="CopyToClipboard('tag8613');return false;" class="tag-decoration">v2-develop</div><div id="tag4645" onclick="CopyToClipboard('tag4645');return false;" class="tag-decoration">v2-develop-6aa0027</div><div id="tag7075" onclick="CopyToClipboard('tag7075');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag26843" onclick="CopyToClipboard('tag26843');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19070" onclick="CopyToClipboard('tag19070');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag29998" onclick="CopyToClipboard('tag29998');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6aa0027ed1a5fedf153d47232f68649cb8dfac59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493231518" target="_blank">2026-11-24 21:39:00</a></td></tr>
<tr><td><div id="tag28442" onclick="CopyToClipboard('tag28442');return false;" class="tag-decoration">v3</div><div id="tag27546" onclick="CopyToClipboard('tag27546');return false;" class="tag-decoration">v3-4eb09fa</div><div id="tag8757" onclick="CopyToClipboard('tag8757');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag12872" onclick="CopyToClipboard('tag12872');return false;" class="tag-decoration">v3-v3</div><div id="tag28145" onclick="CopyToClipboard('tag28145');return false;" class="tag-decoration">v3-v3.6</div><div id="tag9049" onclick="CopyToClipboard('tag9049');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4eb09fa76d1d1dde83c9dcaa879cd4087a560b18" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493224431" target="_blank">2026-11-24 21:38:57</a></td></tr>
<tr><td><div id="tag65" onclick="CopyToClipboard('tag65');return false;" class="tag-decoration">v3-develop</div><div id="tag12945" onclick="CopyToClipboard('tag12945');return false;" class="tag-decoration">v3-develop-4757b23</div><div id="tag18368" onclick="CopyToClipboard('tag18368');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag2242" onclick="CopyToClipboard('tag2242');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30830" onclick="CopyToClipboard('tag30830');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag24804" onclick="CopyToClipboard('tag24804');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4757b23dd9fb03b1011f087840503a7f2289c8df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493242963" target="_blank">2026-11-24 21:39:04</a></td></tr>
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
