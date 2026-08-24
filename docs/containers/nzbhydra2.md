---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20437" onclick="CopyToClipboard('tag20437');return false;" class="tag-decoration">release</div><div id="tag170" onclick="CopyToClipboard('tag170');return false;" class="tag-decoration">release-680377f</div><div id="tag6847" onclick="CopyToClipboard('tag6847');return false;" class="tag-decoration">release-8.9.0</div><div id="tag6668" onclick="CopyToClipboard('tag6668');return false;" class="tag-decoration">release-v8</div><div id="tag7079" onclick="CopyToClipboard('tag7079');return false;" class="tag-decoration">release-v8.9</div><div id="tag12771" onclick="CopyToClipboard('tag12771');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/680377f92c06e440e515411eac1f4c73104445df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32763369094" target="_blank">2026-08-24 18:36:22</a></td></tr>
<tr><td><div id="tag4892" onclick="CopyToClipboard('tag4892');return false;" class="tag-decoration">testing</div><div id="tag2769" onclick="CopyToClipboard('tag2769');return false;" class="tag-decoration">testing-4ed1823</div><div id="tag19289" onclick="CopyToClipboard('tag19289');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag30549" onclick="CopyToClipboard('tag30549');return false;" class="tag-decoration">testing-v8</div><div id="tag18478" onclick="CopyToClipboard('tag18478');return false;" class="tag-decoration">testing-v8.9</div><div id="tag30754" onclick="CopyToClipboard('tag30754');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4ed182357521b55a613a87b68e8115f52f86d4d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32763390084" target="_blank">2026-08-24 18:36:35</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
