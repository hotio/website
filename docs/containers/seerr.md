---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25602" onclick="CopyToClipboard('tag25602');return false;" class="tag-decoration">nightly</div><div id="tag20142" onclick="CopyToClipboard('tag20142');return false;" class="tag-decoration">nightly-b9e25e3</div><div id="tag17051" onclick="CopyToClipboard('tag17051');return false;" class="tag-decoration">nightly-68e01b98a3a275f0b16e3796648ddd356d1a57c1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b9e25e38a48ead4035474cf544477a036604b5f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36141060853" target="_blank">2026-09-25 13:27:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17801" onclick="CopyToClipboard('tag17801');return false;" class="tag-decoration">release</div><div id="tag2274" onclick="CopyToClipboard('tag2274');return false;" class="tag-decoration">release-b6e8cd1</div><div id="tag8130" onclick="CopyToClipboard('tag8130');return false;" class="tag-decoration">release-3.4.1</div><div id="tag22116" onclick="CopyToClipboard('tag22116');return false;" class="tag-decoration">release-v3</div><div id="tag5344" onclick="CopyToClipboard('tag5344');return false;" class="tag-decoration">release-v3.4</div><div id="tag10732" onclick="CopyToClipboard('tag10732');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b6e8cd1997e881fcd259a3ffad7c65a8ffe83878" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35953875178" target="_blank">2026-09-24 04:01:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
