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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23636" onclick="CopyToClipboard('tag23636');return false;" class="tag-decoration">release</div><div id="tag12031" onclick="CopyToClipboard('tag12031');return false;" class="tag-decoration">release-bcb3b30</div><div id="tag20585" onclick="CopyToClipboard('tag20585');return false;" class="tag-decoration">release-0.24.2098</div><div id="tag30623" onclick="CopyToClipboard('tag30623');return false;" class="tag-decoration">release-v0</div><div id="tag878" onclick="CopyToClipboard('tag878');return false;" class="tag-decoration">release-v0.24</div><div id="tag5033" onclick="CopyToClipboard('tag5033');return false;" class="tag-decoration">release-v0.24.2098</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bcb3b305757ac2f1b8ce7937576819ef39e6218c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27895261887" target="_blank">2026-06-21 05:54:43</a></td></tr>
<tr><td><div id="tag3640" onclick="CopyToClipboard('tag3640');return false;" class="tag-decoration">testing</div><div id="tag24838" onclick="CopyToClipboard('tag24838');return false;" class="tag-decoration">testing-fd49132</div><div id="tag11717" onclick="CopyToClipboard('tag11717');return false;" class="tag-decoration">testing-0.24.2098</div><div id="tag18904" onclick="CopyToClipboard('tag18904');return false;" class="tag-decoration">testing-v0</div><div id="tag584" onclick="CopyToClipboard('tag584');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5171" onclick="CopyToClipboard('tag5171');return false;" class="tag-decoration">testing-v0.24.2098</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fd491327ab2472e2b3ad3d269761d855b8ef90b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27914786383" target="_blank">2026-06-21 19:18:11</a></td></tr>
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
