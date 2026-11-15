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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28753" onclick="CopyToClipboard('tag28753');return false;" class="tag-decoration">release</div><div id="tag14905" onclick="CopyToClipboard('tag14905');return false;" class="tag-decoration">release-364eb3a</div><div id="tag8172" onclick="CopyToClipboard('tag8172');return false;" class="tag-decoration">release-0.24.3067</div><div id="tag282" onclick="CopyToClipboard('tag282');return false;" class="tag-decoration">release-v0</div><div id="tag20780" onclick="CopyToClipboard('tag20780');return false;" class="tag-decoration">release-v0.24</div><div id="tag19611" onclick="CopyToClipboard('tag19611');return false;" class="tag-decoration">release-v0.24.3067</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/364eb3ab3d54511b6c2b1df0c504aee2fbded0e7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43689695655" target="_blank">2026-11-15 07:22:52</a></td></tr>
<tr><td><div id="tag26777" onclick="CopyToClipboard('tag26777');return false;" class="tag-decoration">testing</div><div id="tag24996" onclick="CopyToClipboard('tag24996');return false;" class="tag-decoration">testing-953c5b3</div><div id="tag12665" onclick="CopyToClipboard('tag12665');return false;" class="tag-decoration">testing-0.24.3067</div><div id="tag29060" onclick="CopyToClipboard('tag29060');return false;" class="tag-decoration">testing-v0</div><div id="tag15955" onclick="CopyToClipboard('tag15955');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27433" onclick="CopyToClipboard('tag27433');return false;" class="tag-decoration">testing-v0.24.3067</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/953c5b36f43f831293bc9fa2b351312c09e8babb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43689702364" target="_blank">2026-11-15 07:22:57</a></td></tr>
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
