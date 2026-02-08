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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14881" onclick="CopyToClipboard('tag14881');return false;" class="tag-decoration">release</div><div id="tag5359" onclick="CopyToClipboard('tag5359');return false;" class="tag-decoration">release-e9bd99f</div><div id="tag27886" onclick="CopyToClipboard('tag27886');return false;" class="tag-decoration">release-0.24.1066</div><div id="tag11811" onclick="CopyToClipboard('tag11811');return false;" class="tag-decoration">release-v0</div><div id="tag14984" onclick="CopyToClipboard('tag14984');return false;" class="tag-decoration">release-v0.24</div><div id="tag27782" onclick="CopyToClipboard('tag27782');return false;" class="tag-decoration">release-v0.24.1066</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e9bd99fc1ed7d6f72e9dd26eae4a6b845bbb4457" target="_blank">Version update: 0.24.1060 => 0.24.1066</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21793412359" target="_blank">2026-02-08 06:07:40</a></td></tr>
<tr><td><div id="tag13789" onclick="CopyToClipboard('tag13789');return false;" class="tag-decoration">testing</div><div id="tag217" onclick="CopyToClipboard('tag217');return false;" class="tag-decoration">testing-5a26a63</div><div id="tag9438" onclick="CopyToClipboard('tag9438');return false;" class="tag-decoration">testing-0.24.1066</div><div id="tag21893" onclick="CopyToClipboard('tag21893');return false;" class="tag-decoration">testing-v0</div><div id="tag22469" onclick="CopyToClipboard('tag22469');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8543" onclick="CopyToClipboard('tag8543');return false;" class="tag-decoration">testing-v0.24.1066</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5a26a63ce85e6fe6b67bd7f3b8c921b20dc59a40" target="_blank">Version update: 0.24.1060 => 0.24.1066</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21793412400" target="_blank">2026-02-08 06:07:41</a></td></tr>
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
