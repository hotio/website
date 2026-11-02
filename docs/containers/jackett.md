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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28739" onclick="CopyToClipboard('tag28739');return false;" class="tag-decoration">release</div><div id="tag10682" onclick="CopyToClipboard('tag10682');return false;" class="tag-decoration">release-170b573</div><div id="tag4843" onclick="CopyToClipboard('tag4843');return false;" class="tag-decoration">release-0.24.2994</div><div id="tag17669" onclick="CopyToClipboard('tag17669');return false;" class="tag-decoration">release-v0</div><div id="tag2518" onclick="CopyToClipboard('tag2518');return false;" class="tag-decoration">release-v0.24</div><div id="tag15670" onclick="CopyToClipboard('tag15670');return false;" class="tag-decoration">release-v0.24.2994</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/170b573e39cf883fc4d18a736d2153d5d6815edb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41525844082" target="_blank">2026-11-02 21:10:02</a></td></tr>
<tr><td><div id="tag8050" onclick="CopyToClipboard('tag8050');return false;" class="tag-decoration">testing</div><div id="tag27930" onclick="CopyToClipboard('tag27930');return false;" class="tag-decoration">testing-7355f26</div><div id="tag16852" onclick="CopyToClipboard('tag16852');return false;" class="tag-decoration">testing-0.24.2994</div><div id="tag10964" onclick="CopyToClipboard('tag10964');return false;" class="tag-decoration">testing-v0</div><div id="tag29005" onclick="CopyToClipboard('tag29005');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27708" onclick="CopyToClipboard('tag27708');return false;" class="tag-decoration">testing-v0.24.2994</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7355f26eb049c760c40a3ef4750acd8f90c26da5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41440247863" target="_blank">2026-11-02 11:52:48</a></td></tr>
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
