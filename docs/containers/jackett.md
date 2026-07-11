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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22824" onclick="CopyToClipboard('tag22824');return false;" class="tag-decoration">release</div><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">release-604ac58</div><div id="tag12419" onclick="CopyToClipboard('tag12419');return false;" class="tag-decoration">release-0.24.2205</div><div id="tag6691" onclick="CopyToClipboard('tag6691');return false;" class="tag-decoration">release-v0</div><div id="tag28892" onclick="CopyToClipboard('tag28892');return false;" class="tag-decoration">release-v0.24</div><div id="tag11449" onclick="CopyToClipboard('tag11449');return false;" class="tag-decoration">release-v0.24.2205</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/604ac58d828b9516f480e33277e7dc1768ac51ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29144032156" target="_blank">2026-07-11 07:09:58</a></td></tr>
<tr><td><div id="tag18162" onclick="CopyToClipboard('tag18162');return false;" class="tag-decoration">testing</div><div id="tag733" onclick="CopyToClipboard('tag733');return false;" class="tag-decoration">testing-0c20700</div><div id="tag19539" onclick="CopyToClipboard('tag19539');return false;" class="tag-decoration">testing-0.24.2205</div><div id="tag16557" onclick="CopyToClipboard('tag16557');return false;" class="tag-decoration">testing-v0</div><div id="tag3776" onclick="CopyToClipboard('tag3776');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30596" onclick="CopyToClipboard('tag30596');return false;" class="tag-decoration">testing-v0.24.2205</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0c207006e4a61864302515f4a9fa26ff4c923d32" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29144031014" target="_blank">2026-07-11 07:09:57</a></td></tr>
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
