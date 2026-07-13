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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13449" onclick="CopyToClipboard('tag13449');return false;" class="tag-decoration">release</div><div id="tag12194" onclick="CopyToClipboard('tag12194');return false;" class="tag-decoration">release-53e61a9</div><div id="tag8739" onclick="CopyToClipboard('tag8739');return false;" class="tag-decoration">release-0.24.2213</div><div id="tag10170" onclick="CopyToClipboard('tag10170');return false;" class="tag-decoration">release-v0</div><div id="tag24840" onclick="CopyToClipboard('tag24840');return false;" class="tag-decoration">release-v0.24</div><div id="tag7959" onclick="CopyToClipboard('tag7959');return false;" class="tag-decoration">release-v0.24.2213</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/53e61a919cf4331bb45a3e45f9c523426ba2b304" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29236982311" target="_blank">2026-07-13 08:52:38</a></td></tr>
<tr><td><div id="tag21296" onclick="CopyToClipboard('tag21296');return false;" class="tag-decoration">testing</div><div id="tag28813" onclick="CopyToClipboard('tag28813');return false;" class="tag-decoration">testing-5830994</div><div id="tag24438" onclick="CopyToClipboard('tag24438');return false;" class="tag-decoration">testing-0.24.2213</div><div id="tag17580" onclick="CopyToClipboard('tag17580');return false;" class="tag-decoration">testing-v0</div><div id="tag21081" onclick="CopyToClipboard('tag21081');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13843" onclick="CopyToClipboard('tag13843');return false;" class="tag-decoration">testing-v0.24.2213</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/583099448719926b78c1e58ecbe9368036ca0740" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29236981847" target="_blank">2026-07-13 08:52:39</a></td></tr>
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
