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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30572" onclick="CopyToClipboard('tag30572');return false;" class="tag-decoration">release</div><div id="tag25677" onclick="CopyToClipboard('tag25677');return false;" class="tag-decoration">release-399cf38</div><div id="tag29633" onclick="CopyToClipboard('tag29633');return false;" class="tag-decoration">release-0.24.1827</div><div id="tag31649" onclick="CopyToClipboard('tag31649');return false;" class="tag-decoration">release-v0</div><div id="tag3038" onclick="CopyToClipboard('tag3038');return false;" class="tag-decoration">release-v0.24</div><div id="tag2125" onclick="CopyToClipboard('tag2125');return false;" class="tag-decoration">release-v0.24.1827</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/399cf3887872416a1f4d5afbf50fa8c957d903dc" target="_blank">Version update: 0.24.1822 => 0.24.1827</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25592151773" target="_blank">2026-05-09 04:50:58</a></td></tr>
<tr><td><div id="tag12921" onclick="CopyToClipboard('tag12921');return false;" class="tag-decoration">testing</div><div id="tag6473" onclick="CopyToClipboard('tag6473');return false;" class="tag-decoration">testing-3fb6a4a</div><div id="tag18721" onclick="CopyToClipboard('tag18721');return false;" class="tag-decoration">testing-0.24.1822</div><div id="tag19158" onclick="CopyToClipboard('tag19158');return false;" class="tag-decoration">testing-v0</div><div id="tag9587" onclick="CopyToClipboard('tag9587');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20596" onclick="CopyToClipboard('tag20596');return false;" class="tag-decoration">testing-v0.24.1822</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3fb6a4a45027a7df8c037ab3f45420d922eb42af" target="_blank">Version update: 0.24.1816 => 0.24.1822</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25476926128" target="_blank">2026-05-07 04:59:24</a></td></tr>
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
