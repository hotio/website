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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27431" onclick="CopyToClipboard('tag27431');return false;" class="tag-decoration">release</div><div id="tag24840" onclick="CopyToClipboard('tag24840');return false;" class="tag-decoration">release-0.24.821</div><div id="tag16897" onclick="CopyToClipboard('tag16897');return false;" class="tag-decoration">release-e44df0c</div><div id="tag22853" onclick="CopyToClipboard('tag22853');return false;" class="tag-decoration">release-v0</div><div id="tag24988" onclick="CopyToClipboard('tag24988');return false;" class="tag-decoration">release-v0.24</div><div id="tag18014" onclick="CopyToClipboard('tag18014');return false;" class="tag-decoration">release-v0.24.821</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e44df0cd47b185ea8f523aaf8b3763451a07d9fc" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20892084344" target="_blank">2026-01-11 08:19:26</a></td></tr>
<tr><td><div id="tag10984" onclick="CopyToClipboard('tag10984');return false;" class="tag-decoration">testing</div><div id="tag32752" onclick="CopyToClipboard('tag32752');return false;" class="tag-decoration">testing-0.24.821</div><div id="tag23765" onclick="CopyToClipboard('tag23765');return false;" class="tag-decoration">testing-554fbd2</div><div id="tag31128" onclick="CopyToClipboard('tag31128');return false;" class="tag-decoration">testing-v0</div><div id="tag15953" onclick="CopyToClipboard('tag15953');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13185" onclick="CopyToClipboard('tag13185');return false;" class="tag-decoration">testing-v0.24.821</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/554fbd2cbbbce4fcf096bea5e474bab8c469e184" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20892084509" target="_blank">2026-01-11 08:19:27</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
