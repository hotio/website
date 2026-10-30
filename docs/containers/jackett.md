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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14769" onclick="CopyToClipboard('tag14769');return false;" class="tag-decoration">release</div><div id="tag18825" onclick="CopyToClipboard('tag18825');return false;" class="tag-decoration">release-e2bcd5a</div><div id="tag25024" onclick="CopyToClipboard('tag25024');return false;" class="tag-decoration">release-0.24.2977</div><div id="tag1913" onclick="CopyToClipboard('tag1913');return false;" class="tag-decoration">release-v0</div><div id="tag20488" onclick="CopyToClipboard('tag20488');return false;" class="tag-decoration">release-v0.24</div><div id="tag4259" onclick="CopyToClipboard('tag4259');return false;" class="tag-decoration">release-v0.24.2977</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e2bcd5ad80133d0f5f11b4968242366edf231395" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41042144537" target="_blank">2026-10-30 10:37:46</a></td></tr>
<tr><td><div id="tag28685" onclick="CopyToClipboard('tag28685');return false;" class="tag-decoration">testing</div><div id="tag20501" onclick="CopyToClipboard('tag20501');return false;" class="tag-decoration">testing-f9c51cd</div><div id="tag26710" onclick="CopyToClipboard('tag26710');return false;" class="tag-decoration">testing-0.24.2977</div><div id="tag24794" onclick="CopyToClipboard('tag24794');return false;" class="tag-decoration">testing-v0</div><div id="tag7114" onclick="CopyToClipboard('tag7114');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10980" onclick="CopyToClipboard('tag10980');return false;" class="tag-decoration">testing-v0.24.2977</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f9c51cdd5b1d105e649e295d0cf004a1af9c84ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41042145251" target="_blank">2026-10-30 10:37:47</a></td></tr>
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
