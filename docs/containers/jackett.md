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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1638" onclick="CopyToClipboard('tag1638');return false;" class="tag-decoration">release</div><div id="tag30545" onclick="CopyToClipboard('tag30545');return false;" class="tag-decoration">release-fd0a5c5</div><div id="tag19865" onclick="CopyToClipboard('tag19865');return false;" class="tag-decoration">release-0.24.3003</div><div id="tag23454" onclick="CopyToClipboard('tag23454');return false;" class="tag-decoration">release-v0</div><div id="tag30831" onclick="CopyToClipboard('tag30831');return false;" class="tag-decoration">release-v0.24</div><div id="tag9310" onclick="CopyToClipboard('tag9310');return false;" class="tag-decoration">release-v0.24.3003</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fd0a5c525edb0498f3e76431729d3ac938db2124" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41628022330" target="_blank">2026-11-03 11:30:07</a></td></tr>
<tr><td><div id="tag3743" onclick="CopyToClipboard('tag3743');return false;" class="tag-decoration">testing</div><div id="tag31269" onclick="CopyToClipboard('tag31269');return false;" class="tag-decoration">testing-97a681e</div><div id="tag17818" onclick="CopyToClipboard('tag17818');return false;" class="tag-decoration">testing-0.24.2994</div><div id="tag20880" onclick="CopyToClipboard('tag20880');return false;" class="tag-decoration">testing-v0</div><div id="tag1543" onclick="CopyToClipboard('tag1543');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1422" onclick="CopyToClipboard('tag1422');return false;" class="tag-decoration">testing-v0.24.2994</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/97a681ea776b71b2e15ed16306d77b7c24ca39d4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41526035363" target="_blank">2026-11-02 21:09:59</a></td></tr>
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
