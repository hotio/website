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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18227" onclick="CopyToClipboard('tag18227');return false;" class="tag-decoration">release</div><div id="tag4030" onclick="CopyToClipboard('tag4030');return false;" class="tag-decoration">release-082cea3</div><div id="tag4577" onclick="CopyToClipboard('tag4577');return false;" class="tag-decoration">release-0.24.2531</div><div id="tag26041" onclick="CopyToClipboard('tag26041');return false;" class="tag-decoration">release-v0</div><div id="tag30587" onclick="CopyToClipboard('tag30587');return false;" class="tag-decoration">release-v0.24</div><div id="tag30921" onclick="CopyToClipboard('tag30921');return false;" class="tag-decoration">release-v0.24.2531</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/082cea390e46d91a0844084e3336f336cd956249" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33862287778" target="_blank">2026-09-04 10:14:34</a></td></tr>
<tr><td><div id="tag1601" onclick="CopyToClipboard('tag1601');return false;" class="tag-decoration">testing</div><div id="tag17255" onclick="CopyToClipboard('tag17255');return false;" class="tag-decoration">testing-063e2a5</div><div id="tag8044" onclick="CopyToClipboard('tag8044');return false;" class="tag-decoration">testing-0.24.2531</div><div id="tag1233" onclick="CopyToClipboard('tag1233');return false;" class="tag-decoration">testing-v0</div><div id="tag26145" onclick="CopyToClipboard('tag26145');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10223" onclick="CopyToClipboard('tag10223');return false;" class="tag-decoration">testing-v0.24.2531</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/063e2a5253999926597e0c50169570a4d5ffb318" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33862292370" target="_blank">2026-09-04 10:14:38</a></td></tr>
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
