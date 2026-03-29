---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14300" onclick="CopyToClipboard('tag14300');return false;" class="tag-decoration">release</div><div id="tag14343" onclick="CopyToClipboard('tag14343');return false;" class="tag-decoration">release-d19cd81</div><div id="tag22232" onclick="CopyToClipboard('tag22232');return false;" class="tag-decoration">release-0.24.1485</div><div id="tag8559" onclick="CopyToClipboard('tag8559');return false;" class="tag-decoration">release-v0</div><div id="tag1153" onclick="CopyToClipboard('tag1153');return false;" class="tag-decoration">release-v0.24</div><div id="tag3245" onclick="CopyToClipboard('tag3245');return false;" class="tag-decoration">release-v0.24.1485</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d19cd81639e56585aeea50928113dbec908e3840" target="_blank">Version update: 0.24.1474 => 0.24.1485</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23703433019" target="_blank">2026-03-29 06:44:23</a></td></tr>
<tr><td><div id="tag4868" onclick="CopyToClipboard('tag4868');return false;" class="tag-decoration">testing</div><div id="tag11210" onclick="CopyToClipboard('tag11210');return false;" class="tag-decoration">testing-deb3988</div><div id="tag2301" onclick="CopyToClipboard('tag2301');return false;" class="tag-decoration">testing-0.24.1485</div><div id="tag30522" onclick="CopyToClipboard('tag30522');return false;" class="tag-decoration">testing-v0</div><div id="tag3834" onclick="CopyToClipboard('tag3834');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22977" onclick="CopyToClipboard('tag22977');return false;" class="tag-decoration">testing-v0.24.1485</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/deb3988efdf37a3be4610064988966750e3493dc" target="_blank">Version update: 0.24.1474 => 0.24.1485</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23703433409" target="_blank">2026-03-29 06:44:26</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
