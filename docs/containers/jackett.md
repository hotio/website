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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28408" onclick="CopyToClipboard('tag28408');return false;" class="tag-decoration">release</div><div id="tag14336" onclick="CopyToClipboard('tag14336');return false;" class="tag-decoration">release-0800a12</div><div id="tag14657" onclick="CopyToClipboard('tag14657');return false;" class="tag-decoration">release-0.24.2748</div><div id="tag16224" onclick="CopyToClipboard('tag16224');return false;" class="tag-decoration">release-v0</div><div id="tag3038" onclick="CopyToClipboard('tag3038');return false;" class="tag-decoration">release-v0.24</div><div id="tag5872" onclick="CopyToClipboard('tag5872');return false;" class="tag-decoration">release-v0.24.2748</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0800a125e45e8e29e9330adb04717e5c0f524fd6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36918315432" target="_blank">2026-10-01 19:59:30</a></td></tr>
<tr><td><div id="tag17607" onclick="CopyToClipboard('tag17607');return false;" class="tag-decoration">testing</div><div id="tag16568" onclick="CopyToClipboard('tag16568');return false;" class="tag-decoration">testing-c325804</div><div id="tag28305" onclick="CopyToClipboard('tag28305');return false;" class="tag-decoration">testing-0.24.2756</div><div id="tag2978" onclick="CopyToClipboard('tag2978');return false;" class="tag-decoration">testing-v0</div><div id="tag18241" onclick="CopyToClipboard('tag18241');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3221" onclick="CopyToClipboard('tag3221');return false;" class="tag-decoration">testing-v0.24.2756</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c325804e8ed85d72c811ce55ff914dad044c5a46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36994045914" target="_blank">2026-10-02 10:10:57</a></td></tr>
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
