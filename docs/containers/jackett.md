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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag639" onclick="CopyToClipboard('tag639');return false;" class="tag-decoration">release</div><div id="tag24311" onclick="CopyToClipboard('tag24311');return false;" class="tag-decoration">release-facfddd</div><div id="tag23563" onclick="CopyToClipboard('tag23563');return false;" class="tag-decoration">release-0.24.2595</div><div id="tag7818" onclick="CopyToClipboard('tag7818');return false;" class="tag-decoration">release-v0</div><div id="tag4710" onclick="CopyToClipboard('tag4710');return false;" class="tag-decoration">release-v0.24</div><div id="tag909" onclick="CopyToClipboard('tag909');return false;" class="tag-decoration">release-v0.24.2595</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/facfddd4a8b65379469d87f747844e96af367520" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34945805567" target="_blank">2026-09-15 08:13:39</a></td></tr>
<tr><td><div id="tag25100" onclick="CopyToClipboard('tag25100');return false;" class="tag-decoration">testing</div><div id="tag20320" onclick="CopyToClipboard('tag20320');return false;" class="tag-decoration">testing-dc0572f</div><div id="tag6608" onclick="CopyToClipboard('tag6608');return false;" class="tag-decoration">testing-0.24.2595</div><div id="tag18022" onclick="CopyToClipboard('tag18022');return false;" class="tag-decoration">testing-v0</div><div id="tag17601" onclick="CopyToClipboard('tag17601');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29648" onclick="CopyToClipboard('tag29648');return false;" class="tag-decoration">testing-v0.24.2595</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/dc0572f1770fc948883251eeadfd69f9cb0ae22b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34945804559" target="_blank">2026-09-15 08:13:38</a></td></tr>
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
