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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27157" onclick="CopyToClipboard('tag27157');return false;" class="tag-decoration">release</div><div id="tag17849" onclick="CopyToClipboard('tag17849');return false;" class="tag-decoration">release-1b24e0d</div><div id="tag6132" onclick="CopyToClipboard('tag6132');return false;" class="tag-decoration">release-0.24.2098</div><div id="tag4866" onclick="CopyToClipboard('tag4866');return false;" class="tag-decoration">release-v0</div><div id="tag31437" onclick="CopyToClipboard('tag31437');return false;" class="tag-decoration">release-v0.24</div><div id="tag5020" onclick="CopyToClipboard('tag5020');return false;" class="tag-decoration">release-v0.24.2098</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1b24e0dddd458216e55a6776b52c75618b0ae2bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27914786735" target="_blank">2026-06-21 19:18:12</a></td></tr>
<tr><td><div id="tag20965" onclick="CopyToClipboard('tag20965');return false;" class="tag-decoration">testing</div><div id="tag9278" onclick="CopyToClipboard('tag9278');return false;" class="tag-decoration">testing-9ff8b97</div><div id="tag2473" onclick="CopyToClipboard('tag2473');return false;" class="tag-decoration">testing-0.24.2108</div><div id="tag11246" onclick="CopyToClipboard('tag11246');return false;" class="tag-decoration">testing-v0</div><div id="tag24846" onclick="CopyToClipboard('tag24846');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16455" onclick="CopyToClipboard('tag16455');return false;" class="tag-decoration">testing-v0.24.2108</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9ff8b970f5938654752f7e57ded11674c0ac9a98" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27941027053" target="_blank">2026-06-22 08:53:35</a></td></tr>
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
