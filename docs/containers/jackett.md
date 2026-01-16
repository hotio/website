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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28760" onclick="CopyToClipboard('tag28760');return false;" class="tag-decoration">release</div><div id="tag27704" onclick="CopyToClipboard('tag27704');return false;" class="tag-decoration">release-0d9e62e</div><div id="tag2676" onclick="CopyToClipboard('tag2676');return false;" class="tag-decoration">release-0.24.863</div><div id="tag18261" onclick="CopyToClipboard('tag18261');return false;" class="tag-decoration">release-v0</div><div id="tag26149" onclick="CopyToClipboard('tag26149');return false;" class="tag-decoration">release-v0.24</div><div id="tag24483" onclick="CopyToClipboard('tag24483');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0d9e62e418c1ebb199b63c08b87589efd469c2aa" target="_blank">Version update: 0.24.850 => 0.24.863</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21058220043" target="_blank">2026-01-16 06:47:36</a></td></tr>
<tr><td><div id="tag5834" onclick="CopyToClipboard('tag5834');return false;" class="tag-decoration">testing</div><div id="tag11160" onclick="CopyToClipboard('tag11160');return false;" class="tag-decoration">testing-731eb68</div><div id="tag6082" onclick="CopyToClipboard('tag6082');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag7199" onclick="CopyToClipboard('tag7199');return false;" class="tag-decoration">testing-v0</div><div id="tag28814" onclick="CopyToClipboard('tag28814');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4326" onclick="CopyToClipboard('tag4326');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/731eb682344f98c507cb40cac7022e622b57a9dd" target="_blank">Version update: 0.24.850 => 0.24.863</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21058221630" target="_blank">2026-01-16 06:47:40</a></td></tr>
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
