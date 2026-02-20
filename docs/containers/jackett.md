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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3627" onclick="CopyToClipboard('tag3627');return false;" class="tag-decoration">release</div><div id="tag107" onclick="CopyToClipboard('tag107');return false;" class="tag-decoration">release-e4e17f7</div><div id="tag17329" onclick="CopyToClipboard('tag17329');return false;" class="tag-decoration">release-0.24.1157</div><div id="tag25099" onclick="CopyToClipboard('tag25099');return false;" class="tag-decoration">release-v0</div><div id="tag5524" onclick="CopyToClipboard('tag5524');return false;" class="tag-decoration">release-v0.24</div><div id="tag4239" onclick="CopyToClipboard('tag4239');return false;" class="tag-decoration">release-v0.24.1157</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e4e17f793a44d4db89f3be8ced530ead6de48bbb" target="_blank">Version update: 0.24.1147 => 0.24.1157</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22172022568" target="_blank">2026-02-19 07:06:35</a></td></tr>
<tr><td><div id="tag1553" onclick="CopyToClipboard('tag1553');return false;" class="tag-decoration">testing</div><div id="tag5761" onclick="CopyToClipboard('tag5761');return false;" class="tag-decoration">testing-73d9dfa</div><div id="tag21174" onclick="CopyToClipboard('tag21174');return false;" class="tag-decoration">testing-0.24.1167</div><div id="tag859" onclick="CopyToClipboard('tag859');return false;" class="tag-decoration">testing-v0</div><div id="tag28825" onclick="CopyToClipboard('tag28825');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18488" onclick="CopyToClipboard('tag18488');return false;" class="tag-decoration">testing-v0.24.1167</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/73d9dfac675aec4a0477c0f467479f0e2c90d329" target="_blank">Version update: 0.24.1157 => 0.24.1167</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22213332011" target="_blank">2026-02-20 06:01:59</a></td></tr>
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
